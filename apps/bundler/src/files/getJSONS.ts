import {DATA_EXTENSION} from "../constants.ts";
import {getFileNames} from "./getFileNames.ts";

export function getJSONS(folderPath: string): string[] {
    return getFileNames(folderPath, DATA_EXTENSION);
}

