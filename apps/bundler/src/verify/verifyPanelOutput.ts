import {PanelOutput} from "@library/types";

export function verifyPanelOutput(data: any) {
    return PanelOutput.safeParse(data).success;
}