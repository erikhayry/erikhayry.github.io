import {getComic} from "$core/getComic";

export function getPagesLength(slug: string): number {
    return getComic(slug).pages.length
}