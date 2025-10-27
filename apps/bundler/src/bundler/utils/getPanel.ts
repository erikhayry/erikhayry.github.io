import {readPath} from "../../files/readPath.ts";
import type {PanelOutput} from "@library/types";

export function getPanel(filePath: string): PanelOutput {
    return JSON.parse(readPath(filePath));
}
