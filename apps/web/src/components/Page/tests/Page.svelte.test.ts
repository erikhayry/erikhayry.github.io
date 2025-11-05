import {describe, expect, test} from "vitest";
import {renderPageSvelte} from "./utils/renderPage.svelte";
import {PAGE_1_MOCK} from "../../../test/mocks/pageMock";


describe('<Page />', () => {
    test('should render panel images', () => {
        const {getImages} = renderPageSvelte()

        expect(getImages()).toHaveLength(PAGE_1_MOCK.panels.length)
    })
});