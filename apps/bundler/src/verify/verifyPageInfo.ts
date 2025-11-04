import {PageId, PageInfo} from "@library/types";
import {removeDataExtension} from "../files/removeDataExtension.ts";

export function verifyPageInfo(data: any) {
    return PageInfo.safeParse(data).success;
}

export function isPageId(fileName: string) {
    return PageId.safeParse(removeDataExtension(fileName)).success
}