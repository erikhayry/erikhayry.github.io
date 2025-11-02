import {createJSON} from "./createJSON.ts";
import {Panel, PanelInfo} from "@library/types";
import {z} from "zod";


export function createPanelSchema(folderPath: string, fileName: string) {
    createJSON(folderPath, fileName, z.toJSONSchema(Panel))
}

export function createPanelOutputSchema(folderPath: string, fileName: string) {
    createJSON(folderPath, fileName, z.toJSONSchema(PanelInfo))
}