import { describe, expect, test } from "vitest";
import { getPage } from "../getPage";
import { COMIC_MOCK_1 } from "$mock/data/comicMock";

describe("getPanel", () => {
  test("returns panel if matching exists", () => {
    expect(getPage(COMIC_MOCK_1.slug, 0)).toEqual(COMIC_MOCK_1.pages[0]);
  });
});
