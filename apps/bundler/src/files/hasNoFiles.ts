import {getOutputFiles} from "./getOutputFiles.ts";

export function hasNoFiles(folderPath: string) {
    return getOutputFiles(folderPath).length === 0;
}