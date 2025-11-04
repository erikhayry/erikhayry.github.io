import {DATA_EXTENSION} from "../constants.ts";

export function removeDataExtension(fileName: string) {
    return fileName.replace(DATA_EXTENSION, "");
}
