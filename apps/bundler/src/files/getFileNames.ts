import * as path from "path";
import {getPathsOfFileType} from "./getPathsOfFileType.ts";


export function getFileNames(dir: string, extension: string): string[] {
    return getPathsOfFileType(dir, extension).map((filePath) => path.basename(filePath));
}


