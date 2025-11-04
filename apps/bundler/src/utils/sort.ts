import type {NumberedPageOutput} from "../../types";

export function byName(a: string, b: string) {
    return a.localeCompare(b);
}

export function byPageNumber(pageA: NumberedPageOutput, pageB: NumberedPageOutput) {
    return Number.parseFloat(pageA.pageId) - Number.parseFloat(pageB.pageId)
}
