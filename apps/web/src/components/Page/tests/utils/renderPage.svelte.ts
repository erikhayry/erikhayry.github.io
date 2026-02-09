import {render} from "vitest-browser-svelte";
import {PAGE_1_MOCK} from "$mock/data/pageMock";
import {ComicStyle, type ComicStyleType, PageLayout, type PageLayoutValue, type Panel} from "@library/types";
import {COMIC_SLUG_MOCK_1} from "$mock/data/comicMock";
import Page from "../../Page.svelte";
import {DIALOG_BUBBLE_TEST_ID, PAGE_CONTAINER_TEST_ID, PANEL_CONTAINER_TEST_ID,} from "../../constants";
import {within} from "@testing-library/dom";
import {DEFAULT_LANGUAGE} from "$lib/stores/lang.store";

export function renderPageSvelte({
                                     layout,
                                     panels,
                                     style
                                 }: { layout?: PageLayoutValue; panels?: Panel[], style?: ComicStyleType } = {}) {
    const renderResult = render(Page, {
        slug: COMIC_SLUG_MOCK_1,
        panels: panels || PAGE_1_MOCK.panels,
        layout: layout || PageLayout.Hero,
        style: style || ComicStyle.ANIME,
        pageNumber: '0',
        lang: DEFAULT_LANGUAGE,
    });

    const getAllPanelContainers = () =>
        renderResult.getByTestId(PANEL_CONTAINER_TEST_ID).all();

    const getFigCaption = () => renderResult.container.querySelector("figure figcaption");

    return {
        getImages: () => renderResult.getByRole("img").all(),
        getPageContainer: () => renderResult.getByTestId(PAGE_CONTAINER_TEST_ID),
        getAllPanelContainers,
        getByText: renderResult.getByText,
        getDialogBubbles: () => renderResult.getByTestId(DIALOG_BUBBLE_TEST_ID).all(),
        getReferenceLink: (name: string) => within(getFigCaption() as HTMLElement).getByRole("link", {name}),
        getFigCaption,
    };
}
