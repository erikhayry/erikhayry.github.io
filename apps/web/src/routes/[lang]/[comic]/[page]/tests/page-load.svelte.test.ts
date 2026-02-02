import {describe, expect, it} from "vitest";
import {load} from "../+page";
import {PAGE_1_MOCK} from "$mock/data/pageMock";
import {COMIC_MOCK_1} from "$mock/data/comicMock";
import {ComicStyle} from "@library/types";
import {DEFAULT_LANGUAGE} from "$lib/stores/lang.store";
import {BACK_TO_ROOT_LINK} from "../utils/getPagination";
import {TEXT} from "../../../../../i18n/ui";


describe("Comic page load", () => {
    it("should load comic page if available", async () => {
        expect(load({params: {comic: COMIC_MOCK_1.slug, lang: DEFAULT_LANGUAGE, page: "0"}})).toEqual({
            page: PAGE_1_MOCK,
            slug: COMIC_MOCK_1.slug,
            style: ComicStyle.ANIME,
            title: `${COMIC_MOCK_1.title[DEFAULT_LANGUAGE]} | ${1}`,
            pagination: {
                back: {
                    href: `/${DEFAULT_LANGUAGE}/${COMIC_MOCK_1.slug}`,
                    title: BACK_TO_ROOT_LINK.title
                },
                forward: {
                    href: `/${DEFAULT_LANGUAGE}/${COMIC_MOCK_1.slug}/1`,
                    title: `${TEXT.paginationForward[DEFAULT_LANGUAGE]} 2`,
                },
            },
        });
    });

    it("should load error if not available", async () => {
        try {
            load({params: {comic: COMIC_MOCK_1.slug, lang: DEFAULT_LANGUAGE, page: "99"}});
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
