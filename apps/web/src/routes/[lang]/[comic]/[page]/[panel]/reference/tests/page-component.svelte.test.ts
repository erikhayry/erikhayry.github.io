import {page} from "@vitest/browser/context";
import {describe, expect, it} from "vitest";
import Page from "../+page.svelte";
import {load} from "../+page";
import {COMIC_MOCK_1} from "$mock/data/comicMock";
import {DEFAULT_LANGUAGE} from "$lib/stores/lang.store";
import {renderPage} from "../../../../../../../test/renderPage";

describe("Reference page", () => {
    it("should render panel reference page", async () => {
        const data = load({params: {comic: COMIC_MOCK_1.slug, lang: DEFAULT_LANGUAGE, page: "1", panel: '0'}});
        renderPage(Page, data);

        const heading = page.getByRole("heading", {name: data.title, level: 1});
        await expect.element(heading).toBeInTheDocument();

        const link = page.getByRole("link", {name: data.panel.reference!.link!.title[DEFAULT_LANGUAGE]});
        await expect.element(link).toBeInTheDocument();
    });
});
