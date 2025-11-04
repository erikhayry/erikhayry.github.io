import {PanelId, PanelInfo} from "@library/types";
import {removeDataExtension} from "../files/removeDataExtension.ts";

export function verifyPanelInfo(data: any) {
    return PanelInfo.safeParse(data).success;
}

export function isPanelId(fileName: string) {
    return PanelId.safeParse(removeDataExtension(fileName)).success
}
