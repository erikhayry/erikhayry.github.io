import {page} from "@vitest/browser/context";
import {describe, expect, it} from "vitest";
import Page from "../+page.svelte";
import {TEXT} from "../../i18n/ui";
import {renderPage} from "../../test/renderPage";
import {load} from "../+page";

describe("language page", () => {
    it("should render languages", async () => {
        const data = load();
        renderPage(Page, data);

        const heading = page.getByRole("heading", {level: 1});
        expect(heading).toHaveTextContent(`${TEXT.changeLanguageTitle.en} / ${TEXT.changeLanguageTitle.se}`);

        const link = page.getByRole("link");
        expect(link.elements()).toHaveLength(2);

        expect(link.nth(0)).toHaveTextContent("Svenska");
        expect(link.nth(0)).toHaveAttribute("href", "/se");

        expect(link.nth(1)).toHaveTextContent("English");
        expect(link.nth(1)).toHaveAttribute("href", "/en");
    });
});
