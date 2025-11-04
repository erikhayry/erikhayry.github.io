import {getOutputJSONS} from "./getOutputJSONS.ts";

export function hasNoFiles(folderPath: string) {
    return getOutputJSONS(folderPath).length === 0;
}