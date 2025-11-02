import {PanelInfo} from "@library/types";

export function verifyPanelInfo(data: any) {
    return PanelInfo.safeParse(data).success;
}