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

    describe('pagination', () => {
        it('should render page 1 (first)', async () => {
            const data = load({params: {comic: COMIC_MOCK_1.slug, page: '0'}});
            renderPage(Page, data);

            const backLink = page.getByRole('link', {name: 'Back'});
            expect(backLink.element()).toHaveAttribute('href', `/`)

            const forwardLink = page.getByRole('link', {name: 'Page 2'});
            expect(forwardLink.element()).toHaveAttribute('href', `/${COMIC_MOCK_1.slug}/1`)
        });

        it('should render page 1 (first)', async () => {
            const data = load({params: {comic: COMIC_MOCK_1.slug, page: '0'}});
            renderPage(Page, data);

            const backLink = page.getByRole('link', {name: 'Back'});
            expect(backLink.element()).toHaveAttribute('href', `/`)

            const forwardLink = page.getByRole('link', {name: 'Page 2'});
            expect(forwardLink.element()).toHaveAttribute('href', `/${COMIC_MOCK_1.slug}/1`)
        });

        it('should render page 2', async () => {
            const data = load({params: {comic: COMIC_MOCK_1.slug, page: '1'}});
            renderPage(Page, data);

            const backLink = page.getByRole('link', {name: 'Page 1'});
            expect(backLink.element()).toHaveAttribute('href', `/${COMIC_MOCK_1.slug}/0`)

            const forwardLink = page.getByRole('link', {name: 'Page 3'});
            expect(forwardLink.element()).toHaveAttribute('href', `/${COMIC_MOCK_1.slug}/2`)
        });

        it('should render page 3 (last)', async () => {
            const data = load({params: {comic: COMIC_MOCK_1.slug, page: '2'}});
            renderPage(Page, data);

            const backLink = page.getByRole('link', {name: 'Page 2'});
            expect(backLink.element()).toHaveAttribute('href', `/${COMIC_MOCK_1.slug}/1`)

            const forwardLink = page.getByRole('link', {name: 'Back'});
            expect(forwardLink.element()).toHaveAttribute('href', '/')
        });
    });
});
