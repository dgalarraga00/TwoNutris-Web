import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { getCurrentMenuWeek, MENU_API_BASE_URL } from "./menu";
import { menuHandlers } from "./mocks/menuHandlers";
import { currentMenuWeekFixture } from "./mocks/menuFixtures";

const server = setupServer(...menuHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("getCurrentMenuWeek", () => {
  it("fetches and validates the fixture, coercing DRF's decimal strings to numbers", async () => {
    const week = await getCurrentMenuWeek();
    if (week === null) throw new Error("expected a published week");

    expect(week.start_date).toBe(currentMenuWeekFixture.start_date);
    expect(week.days).toHaveLength(1);

    const [day] = week.days;
    expect(day.mains).toHaveLength(2);
    expect(day.salads).toHaveLength(1);

    const [firstMain] = day.mains;
    // DRF's DecimalField serializes as a JSON string ("432.0"); the schema
    // must coerce it to a real number for downstream arithmetic to work.
    expect(firstMain.portion?.calories).toBe(432);
    expect(typeof firstMain.portion?.calories).toBe("number");
  });

  it("parses a dish with a null portion and a null cover image without throwing", async () => {
    const week = await getCurrentMenuWeek();
    if (week === null) throw new Error("expected a published week");
    const soldOutDish = week.days[0]?.mains[1];

    expect(soldOutDish?.portion).toBeNull();
    expect(soldOutDish?.dish.cover_image_url).toBeNull();
    expect(soldOutDish?.is_sold_out).toBe(true);
  });

  it("returns null (not a thrown error) on a 404 menu_week_not_published response (F6 empty state)", async () => {
    server.use(
      http.get(`${MENU_API_BASE_URL}/api/menu/current`, () =>
        HttpResponse.json(
          { detail: "No hay una semana publicada.", code: "menu_week_not_published" },
          { status: 404 },
        ),
      ),
    );

    await expect(getCurrentMenuWeek()).resolves.toBeNull();
  });

  it("still throws ApiError for any other error code (e.g. a real 500)", async () => {
    server.use(
      http.get(`${MENU_API_BASE_URL}/api/menu/current`, () =>
        HttpResponse.json(
          { detail: "Algo salió mal.", code: "server_error" },
          { status: 500 },
        ),
      ),
    );

    await expect(getCurrentMenuWeek()).rejects.toMatchObject({ status: 500, code: "server_error" });
  });
});
