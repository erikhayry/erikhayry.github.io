import {expect, test} from "bun:test";
import {getComicFromContentIndex} from "../getComicFromContentIndex.ts";
import {
    COMIC_STYLES_MOCK,
    VALID_COMIC_INDEX,
    VALID_PAGE_LAYOUT_1_DATA_MOCK,
    VALID_PANEL_DATA_MOCK_1_1
} from "./mock/data.ts";
import {getPagesInfo} from "../utils/contentIndexUtils.ts";


test('comic', () => {
    const comic = getComicFromContentIndex(VALID_COMIC_INDEX);


    expect(comic.slug).toEqual("comics");
    expect(comic.pages).toHaveLength(getPagesInfo(VALID_COMIC_INDEX).length);
    expect(comic.styles).toEqual(COMIC_STYLES_MOCK);
});

test('page', () => {
    const {pages: [page1]} = getComicFromContentIndex(VALID_COMIC_INDEX);


    expect(page1!.layout).toEqual(VALID_PAGE_LAYOUT_1_DATA_MOCK.data.layout);
    expect(page1!.panels[0]).toEqual(VALID_PANEL_DATA_MOCK_1_1.data)
});