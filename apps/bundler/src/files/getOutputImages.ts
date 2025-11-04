import {IMAGE_EXTENSION, OUTPUT_FOLDER} from "../constants.ts";
import {getFileNames} from "./getFileNames.ts";

export function getOutputImages(folderPath: string): string[] {
    return getFileNames(`${folderPath}/${OUTPUT_FOLDER}`, IMAGE_EXTENSION);
}

