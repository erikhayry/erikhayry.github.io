import {page} from '@vitest/browser/context';
import {describe, expect, it} from 'vitest';
import Page from '../+page.svelte';
import {getComic} from "$core/getComic";
import {renderPage} from "../../../test/renderPage";
import {COMIC_MOCK_1} from "../../../test/mocks/comicMock";


describe('Comics page', () => {
    it('should render list of comics pages', async () => {
        renderPage(Page, getComic(COMIC_MOCK_1.slug));

        const heading = page.getByRole('heading', {name: COMIC_MOCK_1.slug});
        const image = page.getByRole('img');
        const pageList = page.getByRole('list');
        const pageLinks = pageList.getByRole('link')
        const backLink = page.getByRole('link', {name: 'Back'})

        await expect.element(heading).toBeInTheDocument();
        await expect.element(image).toBeInTheDocument();
        await expect.element(backLink).toBeInTheDocument();
        await expect.element(pageList).toBeInTheDocument();
        expect(pageLinks.elements()).toHaveLength(COMIC_MOCK_1.pages.length);
    });
});
