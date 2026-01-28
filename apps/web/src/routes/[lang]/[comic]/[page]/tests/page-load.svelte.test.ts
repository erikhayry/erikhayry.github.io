import {describe, expect, it} from "vitest";
import {load} from "../+page";
import {PAGE_1_MOCK} from "$mock/data/pageMock";
import {COMIC_MOCK_1} from "$mock/data/comicMock";
import {ComicStyle} from "@library/types";
import {DEFAULT_LANGUAGE} from "$lib/stores/lang.store";

describe("Comic page load", () => {
    it("should load comic page if available", async () => {
        expect(load({params: {comic: COMIC_MOCK_1.slug, lang: DEFAULT_LANGUAGE, page: "0"}})).toEqual({
            page: PAGE_1_MOCK,
            slug: COMIC_MOCK_1.slug,
            style: ComicStyle.ANIME,
            title: `${COMIC_MOCK_1.title[DEFAULT_LANGUAGE]} | ${1}`,
            pagination: {
                back: {
                    href: "/",
                    title: "Back",
                },
                forward: {
                    href: `/${DEFAULT_LANGUAGE}/${COMIC_MOCK_1.slug}/1`,
                    title: "Page 2",
                },
            },
        });
    });

    it("should load error if not available", async () => {
        try {
            load({params: {comic: COMIC_MOCK_1.slug, lang: DEFAULT_LANGUAGE, page: "99"}});
        } catch (error) {
            expect(error).toMatchSnapshot();
        }
    });
});
