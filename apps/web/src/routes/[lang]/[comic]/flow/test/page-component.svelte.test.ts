import {page} from "@vitest/browser/context";
import {describe, expect, it} from "vitest";
import Page from "../+page.svelte";
import {renderPage} from "../../../../../test/renderPage";
import {load} from "../+page";
import {COMIC_MOCK_1} from "$mock/data/comicMock";
import {DEFAULT_LANGUAGE} from "$lib/stores/lang.store";

describe("Comic page", () => {
    it("should render all comic pages", async () => {
        const data = load({params: {comic: COMIC_MOCK_1.slug, lang: DEFAULT_LANGUAGE}});
        renderPage(Page, data);

        const heading = page.getByRole("heading", {name: data.title, level: 1});
        await expect.element(heading).toBeInTheDocument();

        const images = page.getByRole("img").all();
        await expect(images).toHaveLength(data.pages.reduce((acc, page) => acc + page.panels.length, 0));
    });
});
