import {page} from "@vitest/browser/context";
import {describe, expect, it} from "vitest";
import Page from "../+page.svelte";
import {renderPage} from "../../../../../test/renderPage";
import {load} from "../+page";
import {COMIC_MOCK_1} from "$mock/data/comicMock";
import {DEFAULT_LANGUAGE} from "$lib/stores/lang.store";
import {TEXT} from "../../../../../i18n/ui";
import {PAGE_2_PANEL_1_WITH_REFERENCE_MOCK} from "$mock/data/pageMock";

describe("Comic page", () => {
    it("should reference comic reference page", async () => {
        const data = load({params: {comic: COMIC_MOCK_1.slug, lang: DEFAULT_LANGUAGE}});
        renderPage(Page, data);

        const heading = page.getByRole("heading", {name: TEXT.referenceLabel[DEFAULT_LANGUAGE], level: 1});
        await expect.element(heading).toBeInTheDocument();

        const link = page.getByRole("link", {name: PAGE_2_PANEL_1_WITH_REFERENCE_MOCK.reference!.link!.title[DEFAULT_LANGUAGE]});
        await expect.element(link).toBeInTheDocument();

        const image = page.getByRole("img", {name: PAGE_2_PANEL_1_WITH_REFERENCE_MOCK.reference!.image!.description[DEFAULT_LANGUAGE]});
        const imageLink = page.getByRole("link", {name: PAGE_2_PANEL_1_WITH_REFERENCE_MOCK.reference!.image!.link!.title[DEFAULT_LANGUAGE]});
        await expect.element(image).toBeInTheDocument();
        await expect.element(imageLink).toBeInTheDocument();

        const description = page.getByText(PAGE_2_PANEL_1_WITH_REFERENCE_MOCK.reference!.description![DEFAULT_LANGUAGE]);
        await expect.element(description).toBeInTheDocument();

        const place = page.getByText(PAGE_2_PANEL_1_WITH_REFERENCE_MOCK.reference!.place!.name[DEFAULT_LANGUAGE]);
        const coordinates = page.getByText(`${PAGE_2_PANEL_1_WITH_REFERENCE_MOCK.reference!.place!.coordinates.lat} - ${PAGE_2_PANEL_1_WITH_REFERENCE_MOCK.reference!.place!.coordinates.lon}`);
        await expect.element(place).toBeInTheDocument();
        await expect.element(coordinates).toBeInTheDocument();
    });

    it("should render comic page", async () => {
        const data = load({params: {comic: COMIC_MOCK_1.slug, lang: DEFAULT_LANGUAGE}});
        renderPage(Page, data);

        const heading = page.getByRole("heading", {name: TEXT.referenceLabel[DEFAULT_LANGUAGE], level: 1});
        await expect.element(heading).toBeInTheDocument();

        const link = page.getByRole("link", {name: PAGE_2_PANEL_1_WITH_REFERENCE_MOCK.reference!.link!.title[DEFAULT_LANGUAGE]});
        await expect.element(link).toBeInTheDocument();

        const image = page.getByRole("img", {name: PAGE_2_PANEL_1_WITH_REFERENCE_MOCK.reference!.image!.description[DEFAULT_LANGUAGE]});
        const imageLink = page.getByRole("link", {name: PAGE_2_PANEL_1_WITH_REFERENCE_MOCK.reference!.image!.link!.title[DEFAULT_LANGUAGE]});
        await expect.element(image).toBeInTheDocument();
        await expect.element(imageLink).toBeInTheDocument();

        const description = page.getByText(PAGE_2_PANEL_1_WITH_REFERENCE_MOCK.reference!.description![DEFAULT_LANGUAGE]);
        await expect.element(description).toBeInTheDocument();

        const place = page.getByText(PAGE_2_PANEL_1_WITH_REFERENCE_MOCK.reference!.place!.name[DEFAULT_LANGUAGE]);
        const coordinates = page.getByText(`${PAGE_2_PANEL_1_WITH_REFERENCE_MOCK.reference!.place!.coordinates.lat} - ${PAGE_2_PANEL_1_WITH_REFERENCE_MOCK.reference!.place!.coordinates.lon}`);
        await expect.element(place).toBeInTheDocument();
        await expect.element(coordinates).toBeInTheDocument();
    });

});
