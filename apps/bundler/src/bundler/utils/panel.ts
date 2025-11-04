import {getOutputFilePath} from "../../files/getOutputFilePath.ts";
import {getJSON} from "../../files/getJSON.ts";
import type {PanelId} from "@library/types";

function getId(filePath: string) {
    return getJSON(filePath).id;
}

export function getPanelId(folderPath: string, fileName: string): PanelId {
    return getId(getOutputFilePath(folderPath, fileName))
}