import {describe, expect, test} from "vitest";
import {getPage} from "../getPage";
import {COMIC_MOCK_1} from "../../../../../test/mocks/comicMock";


describe('getPanel', () => {
    test('returns panel if matching exists', () => {
        expect(getPage(COMIC_MOCK_1.slug, 0)).toEqual(COMIC_MOCK_1.pages[0])
    })

    test('returns undefined if matching does not exists', () => {
        expect(getPage(COMIC_MOCK_1.slug, 99)).toBeUndefined()
        expect(getPage('NOT KNOWN', 0)).toBeUndefined()
    })
})