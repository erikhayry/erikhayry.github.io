import * as path from "path";
import {getPaths} from "./getPaths.ts";

export function getFileNames(dir: string, extension: string): string[] {
    return getPaths(dir, extension).map((filePath) => path.basename(filePath));
}


