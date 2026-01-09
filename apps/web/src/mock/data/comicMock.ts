import {type Comic, ComicStyle} from "@library/types";
import {PAGE_1_MOCK, PAGE_2_MOCK, PAGE_3_MOCK} from "./pageMock";

export const COMIC_SLUG_MOCK_1 = "comic-mock-1";

export const COMIC_MOCK_1: Comic = {
    slug: COMIC_SLUG_MOCK_1,
    pages: [PAGE_1_MOCK, PAGE_2_MOCK, PAGE_3_MOCK],
    styles: [ComicStyle.ANIME]
};
