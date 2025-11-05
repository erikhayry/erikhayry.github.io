import {describe, expect, test} from "vitest";
import {getComic} from "$core/getComic";
import {COMIC_MOCK_1} from "../../../../test/mocks/comicMock";

describe('getPanel', () => {
    test('returns comic if matching exists', () => {
        expect(getComic(COMIC_MOCK_1.slug)?.slug).toEqual(COMIC_MOCK_1.slug)
    })

    test('returns undefined if matching does not exists', () => {
        expect(getComic('NOT KNOWN')).toBeUndefined()
    })
})