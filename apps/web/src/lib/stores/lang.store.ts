import {writable} from 'svelte/store';
import type {LanguageType} from "@library/types";

export const DEFAULT_LANGUAGE = 'se'

export const langStore = writable<LanguageType>(DEFAULT_LANGUAGE);
