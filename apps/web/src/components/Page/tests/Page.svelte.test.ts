import {describe, expect, test} from "vitest";
import {renderPageSvelte} from "./utils/renderPage.svelte";
import {
    PAGE_1_MOCK,
    PAGE_1_PANEL_1_DIALOG_2,
    PAGE_1_PANEL_1_MOCK,
    PAGE_1_PANEL_1_SE_NARRATION_1,
    PAGE_2_MOCK,
    PAGE_2_PANEL_1_DIALOG_1,
    PAGE_3_MOCK,
    PAGE_4_MOCK,
} from "$mock/data/pageMock";
import {i18n} from "../../../i18n/i18n";
import {getDialog} from "../components/PanelImage/utils/getDialog";

describe("<Page />", () => {
    test("should render panel images", () => {
        const {getImages} = renderPageSvelte();

        expect(getImages()).toHaveLength(PAGE_1_MOCK.panels.length);
        expect(getImages().at(0)).toHaveAccessibleName(i18n(PAGE_1_PANEL_1_MOCK.description))
    });

    describe("narrations", () => {
        test("should show narrations", () => {
            const {getByText} = renderPageSvelte(PAGE_1_MOCK);

            expect(getByText(PAGE_1_PANEL_1_SE_NARRATION_1)).toBeInTheDocument()
        });
    });

    describe("dialogs", () => {
        test("should show dialog", () => {
            const {getDialogBubbles} = renderPageSvelte(PAGE_2_MOCK);

            expect(getDialogBubbles().at(0)).toHaveTextContent(`${getDialog(PAGE_2_PANEL_1_DIALOG_1).person} ${getDialog(PAGE_2_PANEL_1_DIALOG_1).text}`)
            expect(getDialogBubbles().at(1)).toHaveTextContent(`${getDialog(PAGE_1_PANEL_1_DIALOG_2).person} ${getDialog(PAGE_1_PANEL_1_DIALOG_2).text}`)
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

        test("LandscapeDiptych", () => {
            const {getPageContainer, getAllPanelContainers} =
                renderPageSvelte(PAGE_2_MOCK);

            expect(getPageContainer()).toHaveClass("layout-2");
            expect(getAllPanelContainers()).toHaveLength(2);
            expect(getAllPanelContainers().at(0)).toHaveClass("panel-a");
            expect(getAllPanelContainers().at(1)).toHaveClass("panel-b");
        });

        test("VerticalDiptych", () => {
            const {getPageContainer, getAllPanelContainers} =
                renderPageSvelte(PAGE_3_MOCK);

            expect(getPageContainer()).toHaveClass("layout-3");
            expect(getAllPanelContainers().at(0)).toHaveClass("panel-a");
            expect(getAllPanelContainers().at(1)).toHaveClass("panel-b");
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
