import {describe, expect, it} from "vitest";
import {load} from "../+page";
import {PAGE_1_MOCK} from "$mock/data/pageMock";
import {COMIC_MOCK_1} from "$mock/data/comicMock";
import {ComicStyle} from "@library/types";

describe("Comic page load", () => {
    it("should load comic page if available", async () => {
        expect(load({params: {comic: COMIC_MOCK_1.slug, lang: 'en', page: "0"}})).toEqual({
            page: PAGE_1_MOCK,
            slug: COMIC_MOCK_1.slug,
            style: ComicStyle.ANIME,
            title: `${COMIC_MOCK_1.title.en} | ${1}`,
            pagination: {
                back: {
                    href: "/",
                    title: "Back",
                },
                forward: {
                    href: "/comic-mock-1/en/1",
                    title: "Page 2",
                },
            },
        });
    });

    it("should load error if not available", async () => {
        try {
            load({params: {comic: COMIC_MOCK_1.slug, lang: 'en', page: "99"}});
        } catch (error) {
            expect(error).toMatchSnapshot();
        }
    });
});
