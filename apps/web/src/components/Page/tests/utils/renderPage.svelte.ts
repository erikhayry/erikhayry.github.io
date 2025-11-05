import {render} from "vitest-browser-svelte";
import {PAGE_1_MOCK} from "../../../../test/mocks/pageMock";
import {PageLayout} from "@library/types";
import {COMIC_SLUG_MOCK_1} from "../../../../test/mocks/comicMock";
import Page from "../../Page.svelte";

export function renderPageSvelte() {
    const renderResult = render(Page, {
        slug: COMIC_SLUG_MOCK_1,
        panels: PAGE_1_MOCK.panels,
        layout: PageLayout.Hero
    })

    return {
        getImages: () => renderResult.getByRole('img').all()
    }
}