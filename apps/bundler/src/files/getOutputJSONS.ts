import {OUTPUT_FOLDER} from "../constants.ts";
import {getJSONS} from "./getJSONS.ts";

export function getOutputJSONS(folderPath: string): string[] {
    return getJSONS(`${folderPath}/${OUTPUT_FOLDER}`)
}

