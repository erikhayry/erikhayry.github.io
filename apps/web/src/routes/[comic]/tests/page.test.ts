import {describe, expect, it, vi} from 'vitest';
import {load} from "../+page";
import {COMIC_MOCK_1} from "../../../test/mocks/comicMock";
import * as get from "../../../utils/getComics";
import {WEBSITE_MOCK} from "../../../test/mocks/websiteMock";

vi.spyOn(get, 'getComics').mockImplementation(() => WEBSITE_MOCK)


describe('Comic load', () => {
    it('should load comic if available', async () => {
        expect(load({params: {comic: COMIC_MOCK_1.slug}})).toEqual(COMIC_MOCK_1)
    });

    it('should load error if not available', async () => {
        try {
            load({params: {comic: 'UNKOWN'}})
        } catch (error) {
            expect(error).toMatchSnapshot()
        }
    });
});
