import type {Page} from "@library/types";
import {getPages} from "./getPages";

export function getPage(slug: string, index: number): Page | undefined {
    return getPages(slug)?.[index]
}