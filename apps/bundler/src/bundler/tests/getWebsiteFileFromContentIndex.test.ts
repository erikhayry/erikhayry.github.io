import {expect, test} from "bun:test";
import {getComicFromContentIndex} from "../getComicFromContentIndex.ts";
import {
    COMIC_STYLES_MOCK,
    VALID_PAGE_LAYOUT_1_DATA_MOCK,
    VALID_PAGE_LAYOUT_2_DATA_MOCK,
    VALID_PANEL_DATA_MOCK_1_1,
    VALID_PANEL_DATA_MOCK_2_1,
    VALID_PANEL_DATA_MOCK_2_2,
    VALIDATED_CONTENT_INDEX
} from "./mock/data.ts";
import {getPagesInfo} from "../utils/contentIndexUtils.ts";


test('comic', () => {
    const comic = getComicFromContentIndex(VALIDATED_CONTENT_INDEX);


    expect(comic.slug).toEqual("comics");
    expect(comic.pages).toHaveLength(getPagesInfo(VALIDATED_CONTENT_INDEX.pages).length);
    expect(comic.styles).toEqual(COMIC_STYLES_MOCK);
});

test('page', () => {
    const {pages: [page1, page2]} = getComicFromContentIndex(VALIDATED_CONTENT_INDEX);


    expect(page1!.layout).toEqual(VALID_PAGE_LAYOUT_1_DATA_MOCK.data.layout);
    expect(page1!.panels[0]).toEqual(VALID_PANEL_DATA_MOCK_1_1.data)

    expect(page2!.layout).toEqual(VALID_PAGE_LAYOUT_2_DATA_MOCK.data.layout);
    expect(page2!.panels[0]).toEqual(VALID_PANEL_DATA_MOCK_2_1.data)
    expect(page2!.panels[1]).toEqual(VALID_PANEL_DATA_MOCK_2_2.data)

});