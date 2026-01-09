import {render} from "vitest-browser-svelte";
import {PAGE_1_MOCK} from "$mock/data/pageMock";
import {ComicStyle, type ComicStyleType, PageLayout, type PageLayoutValue, type Panel} from "@library/types";
import {COMIC_SLUG_MOCK_1} from "$mock/data/comicMock";
import Page from "../../Page.svelte";
import {PAGE_CONTAINER_TEST_ID, PANEL_CONTAINER_TEST_ID,} from "../../constants";

export function renderPageSvelte({
                                     layout,
                                     panels,
                                     style
                                 }: { layout?: PageLayoutValue; panels?: Panel[], style?: ComicStyleType } = {}) {
    const renderResult = render(Page, {
        slug: COMIC_SLUG_MOCK_1,
        panels: panels || PAGE_1_MOCK.panels,
        layout: layout || PageLayout.Hero,
        style: style || ComicStyle.ANIME
    });

    const getAllPanelContainers = () =>
        renderResult.getByTestId(PANEL_CONTAINER_TEST_ID).all();

    return {
        getImages: () => renderResult.getByRole("img").all(),
        getPageContainer: () => renderResult.getByTestId(PAGE_CONTAINER_TEST_ID),
        getAllPanelContainers,
        getByText: renderResult.getByText
    };
}
