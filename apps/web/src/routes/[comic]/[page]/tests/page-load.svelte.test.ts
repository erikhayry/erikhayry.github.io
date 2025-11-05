import {describe, expect, it} from 'vitest';
import {load} from "../+page";
import {PAGE_1_MOCK} from "../../../../test/mocks/pageMock";
import {COMIC_MOCK_1} from "../../../../test/mocks/comicMock";


describe('Comic page load', () => {
    it('should load comic page if available', async () => {
        expect(load({params: {comic: COMIC_MOCK_1.slug, page: '0'}})).toEqual({
            page: PAGE_1_MOCK,
            slug: COMIC_MOCK_1.slug,
            title: `${COMIC_MOCK_1.slug} | ${1}`
        })
    });

    it('should load error if not available', async () => {
        try {
            load({params: {comic: COMIC_MOCK_1.slug, page: '99'}})
        } catch (error) {
            expect(error).toMatchSnapshot()
        }
    });
});
