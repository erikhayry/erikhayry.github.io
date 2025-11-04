import {PageId, PageInfo} from "@library/types";
import {removeExtension} from "../files/removeExtension.ts";

export function verifyPageInfo(data: any) {
    return PageInfo.safeParse(data).success;
}

export function isPageId(fileName: string) {
    return PageId.safeParse(removeExtension(fileName)).success
}