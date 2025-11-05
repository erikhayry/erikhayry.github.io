import {getComics} from "$core/getComics";
import type {Comic} from "@library/types";

export function getComic(comicSlug: string): Comic | undefined {
    return getComics().find(({slug}) => slug === comicSlug)
}