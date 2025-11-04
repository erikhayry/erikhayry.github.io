import {getOutputJSONS} from "./getOutputJSONS.ts";

export function getOutputFiles(folderPath: string) {
    return getOutputJSONS(folderPath);
}