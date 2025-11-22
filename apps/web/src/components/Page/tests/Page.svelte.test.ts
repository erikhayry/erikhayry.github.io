import {describe, expect, test} from "vitest";
import {renderPageSvelte} from "./utils/renderPage.svelte";
import {
    PAGE_1_MOCK,
    PAGE_1_PANEL_1_DIALOG_2,
    PAGE_1_PANEL_1_MOCK,
    PAGE_1_PANEL_1_NARRATION_1,
    PAGE_2_MOCK,
    PAGE_2_PANEL_1_DIALOG_1,
    PAGE_3_MOCK,
    PAGE_4_MOCK,
} from "$mock/data/pageMock";
import {getDialog} from "../components/PanelImage/components/utils/getDialog";

describe("<Page />", () => {
    test("should render panel images", () => {
        const {getImages} = renderPageSvelte();

        expect(getImages()).toHaveLength(PAGE_1_MOCK.panels.length);
        expect(getImages().at(0)).toHaveAccessibleName(PAGE_1_PANEL_1_MOCK.description)
    });

    describe("narrations", () => {
        test("should show narrations", () => {
            const {getImages} = renderPageSvelte(PAGE_1_MOCK);

            expect(getImages().at(0)).toHaveAccessibleDescription(
                PAGE_1_PANEL_1_NARRATION_1,
            );
        });

        test("should not show narrations", () => {
            const {getImages} = renderPageSvelte(PAGE_2_MOCK);

            expect(getImages().at(1)).not.toHaveAccessibleDescription();
        });
    });

    describe("narrations", () => {
        test("should show dialog", () => {
            const {getImages} = renderPageSvelte(PAGE_2_MOCK);

            expect(getImages().at(0)).toHaveAccessibleDescription(
                `${getDialog(PAGE_2_PANEL_1_DIALOG_1)} ${getDialog(PAGE_1_PANEL_1_DIALOG_2)}`,
            );
        });

        test("should not show dialogs", () => {
            const {getImages} = renderPageSvelte(PAGE_2_MOCK);

            expect(getImages().at(1)).not.toHaveAccessibleDescription();
        });
    });

    describe("layouts", () => {
        test("hero", () => {
            const {getPageContainer, getAllPanelContainers} =
                renderPageSvelte(PAGE_1_MOCK);

            expect(getPageContainer()).toHaveClass("layout-1");
            expect(getAllPanelContainers().at(0)).toHaveClass("panel-a");
        });

        test("split wide", () => {
            const {getPageContainer, getAllPanelContainers} =
                renderPageSvelte(PAGE_2_MOCK);

            expect(getPageContainer()).toHaveClass("layout-2");
            expect(getAllPanelContainers()).toHaveLength(2);
            expect(getAllPanelContainers().at(0)).toHaveClass("panel-a");
            expect(getAllPanelContainers().at(1)).toHaveClass("panel-b");
        });

        test("horizontal triptych", () => {
            const {getPageContainer, getAllPanelContainers} =
                renderPageSvelte(PAGE_3_MOCK);

            expect(getPageContainer()).toHaveClass("layout-3");
            expect(getAllPanelContainers().at(0)).toHaveClass("panel-a");
            expect(getAllPanelContainers().at(1)).toHaveClass("panel-b");
            expect(getAllPanelContainers().at(2)).toHaveClass("panel-c");
        });

        test("quad", () => {
            const {getPageContainer, getAllPanelContainers} =
                renderPageSvelte(PAGE_4_MOCK);

            expect(getPageContainer()).toHaveClass("layout-4");
            expect(getAllPanelContainers().at(0)).toHaveClass("panel-a");
            expect(getAllPanelContainers().at(1)).toHaveClass("panel-b");
            expect(getAllPanelContainers().at(2)).toHaveClass("panel-c");
            expect(getAllPanelContainers().at(3)).toHaveClass("panel-d");
        });
    });
});
