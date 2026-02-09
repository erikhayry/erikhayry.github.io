import {describe, expect, it} from "vitest";
import {load} from "../+page";
import {PAGE_2_PANEL_1_WITH_REFERENCE_MOCK} from "$mock/data/pageMock";
import {COMIC_MOCK_1} from "$mock/data/comicMock";
import {DEFAULT_LANGUAGE} from "$lib/stores/lang.store";


describe("Comic page load", () => {
    it("should load comic page if available", async () => {
        expect(load({params: {comic: COMIC_MOCK_1.slug, lang: DEFAULT_LANGUAGE, page: "1", panel: '0'}})).toEqual({
            title: `${COMIC_MOCK_1.title[DEFAULT_LANGUAGE]} | ${2} | ${1}`,
            panel: PAGE_2_PANEL_1_WITH_REFERENCE_MOCK
        });
    });

    it("should load error if not available", async () => {
        try {
            load({params: {comic: COMIC_MOCK_1.slug, lang: DEFAULT_LANGUAGE, page: "1", panel: '1'}});
        } catch (error) {
            expect(error).toMatchInlineSnapshot(`
              HttpError {
                "body": {
                  "message": "Not found",
                },
                "status": 404,
              }
            `);
        }
    });
});
