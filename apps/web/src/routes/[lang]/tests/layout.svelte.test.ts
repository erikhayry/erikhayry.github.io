import {describe, expect, it} from 'vitest';
import {get} from 'svelte/store';
import Layout from '../+layout.svelte';
import {langStore} from '$lib/stores/lang.store';
import {render} from "vitest-browser-svelte";
import {Language} from "@library/types";

describe('+layout.svelte', () => {
    it('should set langStore with data.lang', () => {
        const mockData = {lang: Language.SE};

        render(Layout, {
            props: {
                data: mockData,
                // @ts-expect-error not relevant for the test
                children: () => {
                    return null;
                }
            }
        });

        expect(get(langStore)).toBe(Language.SE);
    });
});
