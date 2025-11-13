import {getComic} from "$core/getComic";
import type {Page} from "@library/types";

export function getPages(slug: string): Page[] {
    return getComic(slug).pages
}