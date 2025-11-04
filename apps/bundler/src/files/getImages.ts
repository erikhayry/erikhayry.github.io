import {IMAGE_EXTENSION} from "../constants.ts";
import {getFileNames} from "./getFileNames.ts";

export function getImages(folderPath: string): string[] {
    return getFileNames(`${folderPath}`, IMAGE_EXTENSION);
}

