import {PageInfo} from "@library/types";

export function verifyPageInfo(data: any) {
    return PageInfo.safeParse(data).success;
}