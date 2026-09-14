import { http, HttpResponse } from "msw";
import { MENU_API_BASE_URL } from "@/lib/api/menu";
import { currentMenuWeekFixture } from "./menuFixtures";

/**
 * MSW handler for `GET /api/menu/current`, established for this unit (F4)
 * per task 4.10 and reused as-is by later units (F6 menu preview, F10 weekly
 * grid) once they set up their own `setupServer`/`setupWorker`.
 */
export const menuHandlers = [
  http.get(`${MENU_API_BASE_URL}/api/menu/current`, () =>
    HttpResponse.json(currentMenuWeekFixture),
  ),
];
