import {expect, test} from "bun:test";
import {getComicFromContentIndex} from "../getComicFromContentIndex.ts";
import {
    COMIC_STYLES_MOCK,
    VALID_COMIC_INDEX,
    VALID_PAGE_LAYOUT_1_DATA_MOCK,
    VALID_PAGE_LAYOUT_2_DATA_MOCK,
    VALID_PAGE_LAYOUT_3_DATA_MOCK,
    VALID_PAGE_LAYOUT_4_DATA_MOCK,
    VALID_PANEL_DATA_MOCK_1_1,
    VALID_PANEL_DATA_MOCK_2_1,
    VALID_PANEL_DATA_MOCK_2_2,
    VALID_PANEL_DATA_MOCK_3_1,
    VALID_PANEL_DATA_MOCK_3_2,
    VALID_PANEL_DATA_MOCK_4_1,
    VALID_PANEL_DATA_MOCK_4_2,
    VALID_PANEL_DATA_MOCK_4_3,
    VALID_PANEL_DATA_MOCK_4_4
} from "./mock/data.ts";
import {getPagesInfo} from "../utils/contentIndexUtils.ts";


test('comic', () => {
    const comic = getComicFromContentIndex(VALID_COMIC_INDEX);


    expect(comic.slug).toEqual("comics");
    expect(comic.pages).toHaveLength(getPagesInfo(VALID_COMIC_INDEX).length);
    expect(comic.styles).toEqual(COMIC_STYLES_MOCK);
});

test('page', () => {
    const {pages: [page1, page2, page3, page4]} = getComicFromContentIndex(VALID_COMIC_INDEX);


    expect(page1!.layout).toEqual(VALID_PAGE_LAYOUT_1_DATA_MOCK.data.layout);
    expect(page1!.panels[0]).toEqual(VALID_PANEL_DATA_MOCK_1_1.data)

    expect(page2!.layout).toEqual(VALID_PAGE_LAYOUT_2_DATA_MOCK.data.layout);
    expect(page2!.panels[0]).toEqual(VALID_PANEL_DATA_MOCK_2_1.data)
    expect(page2!.panels[1]).toEqual(VALID_PANEL_DATA_MOCK_2_2.data)

    expect(page3!.layout).toEqual(VALID_PAGE_LAYOUT_3_DATA_MOCK.data.layout);
    expect(page3!.panels[0]).toEqual(VALID_PANEL_DATA_MOCK_3_1.data)
    expect(page3!.panels[1]).toEqual(VALID_PANEL_DATA_MOCK_3_2.data)

    expect(page4!.layout).toEqual(VALID_PAGE_LAYOUT_4_DATA_MOCK.data.layout);
    expect(page4!.panels[0]).toEqual(VALID_PANEL_DATA_MOCK_4_1.data)
    expect(page4!.panels[1]).toEqual(VALID_PANEL_DATA_MOCK_4_2.data)
    expect(page4!.panels[2]).toEqual(VALID_PANEL_DATA_MOCK_4_3.data)
    expect(page4!.panels[3]).toEqual(VALID_PANEL_DATA_MOCK_4_4.data)
});