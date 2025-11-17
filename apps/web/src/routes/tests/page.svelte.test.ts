import {page} from '@vitest/browser/context';
import {describe, expect, it} from 'vitest';
import {render} from 'vitest-browser-svelte';
import Page from '../+page.svelte';
import {COMIC_MOCK_1} from "$mock/data/comicMock";

describe('comics page', () => {
    it('should render list of comics links', async () => {
        render(Page);

        const link = page.getByRole('link', {name: COMIC_MOCK_1.slug, exact: true});

        expect(link.elements()).toHaveLength(1);
        await expect.element(link).toHaveAttribute('href', `/${COMIC_MOCK_1.slug}/0`);
    });
});
