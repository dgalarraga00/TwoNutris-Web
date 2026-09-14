import { describe, expect, it } from "vitest";
import { POST } from "./route";
import { REFRESH_COOKIE_NAME } from "../shared";

describe("POST /api/session/logout", () => {
  it("returns 200 and clears the tw_refresh cookie without calling Django", async () => {
    const response = await POST();
    const data: unknown = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({});

    const cookie = response.cookies.get(REFRESH_COOKIE_NAME);
    expect(cookie?.value).toBe("");
  });
});
