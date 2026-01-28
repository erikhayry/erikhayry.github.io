import {page} from "@vitest/browser/context";
import {describe, expect, it} from "vitest";
import {render} from "vitest-browser-svelte";
import Page from "../+page.svelte";

describe("language page", () => {
    it("should render languages", async () => {
        render(Page);

        const link = page.getByRole("link");
        expect(link.elements()).toHaveLength(2);

        expect(link.nth(0)).toHaveTextContent("Svenska");
        expect(link.nth(0)).toHaveAttribute("href", "/se");

        expect(link.nth(1)).toHaveTextContent("English");
        expect(link.nth(1)).toHaveAttribute("href", "/en");
    });
});
