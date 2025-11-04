import {PanelId, PanelInfo} from "@library/types";
import {removeExtension} from "../files/removeExtension.ts";

export function verifyPanelInfo(data: any) {
    return PanelInfo.safeParse(data).success;
}

export function isPanelId(fileName: string) {
    return PanelId.safeParse(removeExtension(fileName)).success
}
