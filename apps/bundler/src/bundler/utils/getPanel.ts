import {readPath} from "../../files/readPath.ts";
import type {PanelOutput as PanelOutputType} from "@library/types";
import {PanelOutput} from "@library/types";

export function getPanel(filePath: string): PanelOutputType {
    return PanelOutput.parse(JSON.parse(readPath(filePath)));
}
