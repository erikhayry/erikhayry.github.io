import {page} from "@vitest/browser/context";
import {describe, expect, it} from "vitest";
import Page from "../+page.svelte";
import {renderPage} from "../../../../test/renderPage";
import {load} from "../+page";
import {COMIC_MOCK_1} from "$mock/data/comicMock";
import {DEFAULT_LANGUAGE} from "$lib/stores/lang.store";
import {TEXT} from "../../../../i18n/ui";

describe("Comic page", () => {
    it("should render comic page", async () => {
        const data = load({params: {comic: COMIC_MOCK_1.slug, lang: DEFAULT_LANGUAGE}});
        renderPage(Page, data);

        const heading = page.getByRole("heading", {name: data.comic.title[DEFAULT_LANGUAGE], level: 1});
        await expect.element(heading).toBeInTheDocument();

        const startReadingLink = page.getByRole("link", {name: TEXT.startReadingPageByPage[DEFAULT_LANGUAGE]});
        await expect
            .element(startReadingLink)
            .toHaveAttribute("href", `/${DEFAULT_LANGUAGE}/${COMIC_MOCK_1.slug}/0`);

        const backLink = page.getByRole("link", {name: TEXT.backToComics[DEFAULT_LANGUAGE]});
        await expect
            .element(backLink)
            .toHaveAttribute("href", `/${DEFAULT_LANGUAGE}`);
    });

});
