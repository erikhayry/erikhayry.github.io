import {LanguageType} from "@library/types";
import {z} from "zod";
import {get} from 'svelte/store';
import {langStore} from '$lib/stores/lang.store';


export const I18N = z.record(LanguageType, z.any())
export type I18N = z.infer<typeof I18N>;

export function i18n(text: I18N) {
    return text[get(langStore)]
}