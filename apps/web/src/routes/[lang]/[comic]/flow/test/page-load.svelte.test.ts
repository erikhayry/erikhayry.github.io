import {describe, expect, it} from "vitest";
import {load} from "../+page";
import {COMIC_MOCK_1} from "$mock/data/comicMock";
import {DEFAULT_LANGUAGE} from "$lib/stores/lang.store";
import {ComicStyle} from "@library/types";


describe("Comic page load", () => {
    it("should load comic page if available", async () => {
        expect(load({params: {comic: COMIC_MOCK_1.slug, lang: DEFAULT_LANGUAGE}})).toEqual({
            lang: DEFAULT_LANGUAGE,
            pages: COMIC_MOCK_1.pages,
            title: `${COMIC_MOCK_1.title[DEFAULT_LANGUAGE]}`,
            slug: COMIC_MOCK_1.slug,
            style: ComicStyle.ANIME
        });
    });

    it("should load error if not available", async () => {
        try {
            load({params: {comic: 'UNKNOWN', lang: DEFAULT_LANGUAGE}});
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
