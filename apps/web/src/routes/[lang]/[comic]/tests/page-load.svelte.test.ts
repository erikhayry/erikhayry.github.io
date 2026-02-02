import {describe, expect, it} from "vitest";
import {load} from "../+page";
import {COMIC_MOCK_1} from "$mock/data/comicMock";
import {DEFAULT_LANGUAGE} from "$lib/stores/lang.store";
import {TEXT} from "../../../../i18n/ui";


describe("Comic load", () => {
    it("should load comic page if available", async () => {
        expect(load({params: {comic: COMIC_MOCK_1.slug, lang: DEFAULT_LANGUAGE}})).toEqual({
            comic: COMIC_MOCK_1,
            numberOfPages: `${TEXT.pages[DEFAULT_LANGUAGE]}: ${COMIC_MOCK_1.pages.length}`,
            lang: DEFAULT_LANGUAGE
        });
    });

    it("should load error if not available", async () => {
        try {
            expect(load({params: {comic: 'UNKWON', lang: DEFAULT_LANGUAGE}}));
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