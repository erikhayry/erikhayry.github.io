import {page} from '@vitest/browser/context';
import {describe, expect, it} from 'vitest';
import Page from '../+page.svelte';
import {renderPage} from "../../../../test/renderPage";
import {load} from "../+page";
import {COMIC_MOCK_1} from "../../../../test/mocks/comicMock";


describe('Comic page', () => {
    it('should render comic page', async () => {
        const data = load({params: {comic: COMIC_MOCK_1.slug, page: '0'}});
        renderPage(Page, data);

        const heading = page.getByRole('heading', {name: data.title, level: 1});
        await expect.element(heading).toBeInTheDocument();

        const image = page.getByRole('img');
        expect(image.elements()).toHaveLength(COMIC_MOCK_1.pages[0].panels.length);
    });
});
