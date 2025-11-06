import {describe, expect, test} from "vitest";
import {renderPageSvelte} from "./utils/renderPage.svelte";
import {PAGE_1_MOCK, PAGE_2_MOCK, PAGE_3_MOCK, PAGE_4_MOCK} from "../../../test/mocks/pageMock";


describe('<Page />', () => {
    test('should render panel images', () => {
        const {getImages} = renderPageSvelte()

        expect(getImages()).toHaveLength(PAGE_1_MOCK.panels.length)
    })

    describe('layouts', () => {
        test('hero', () => {
            const {getPageContainer, getAllPanelContainers} = renderPageSvelte(PAGE_1_MOCK)

            expect(getPageContainer()).toHaveClass('layout-1')
            expect(getAllPanelContainers().at(0)).toHaveClass('panel-a')
        })

        test('split wide', () => {
            const {getPageContainer, getAllPanelContainers} = renderPageSvelte(PAGE_2_MOCK)

            expect(getPageContainer()).toHaveClass('layout-2')
            expect(getAllPanelContainers()).toHaveLength(2)
            expect(getAllPanelContainers().at(0)).toHaveClass('panel-a')
            expect(getAllPanelContainers().at(1)).toHaveClass('panel-b')
        })

        test('horizontal triptych', () => {
            const {getPageContainer, getAllPanelContainers} = renderPageSvelte(PAGE_3_MOCK)

            expect(getPageContainer()).toHaveClass('layout-3')
            expect(getAllPanelContainers().at(0)).toHaveClass('panel-a')
            expect(getAllPanelContainers().at(1)).toHaveClass('panel-b')
            expect(getAllPanelContainers().at(2)).toHaveClass('panel-c')
        })

        test('quad', () => {
            const {getPageContainer, getAllPanelContainers} = renderPageSvelte(PAGE_4_MOCK)

            expect(getPageContainer()).toHaveClass('layout-4')
            expect(getAllPanelContainers().at(0)).toHaveClass('panel-a')
            expect(getAllPanelContainers().at(1)).toHaveClass('panel-b')
            expect(getAllPanelContainers().at(2)).toHaveClass('panel-c')
            expect(getAllPanelContainers().at(3)).toHaveClass('panel-d')
        })
    });
});