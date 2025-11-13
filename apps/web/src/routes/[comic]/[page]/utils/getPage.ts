import type {Page} from "@library/types";
import {getPages} from "./getPages";

export function getPage(slug: string, index: number): Page {
    return getPages(slug)[index]
}