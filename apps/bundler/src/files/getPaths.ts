import * as fs from "fs";
import * as path from "path";
import {byName} from "../utils/sort.ts";

export function getPaths(dir: string, fileType: string): string[] {
    return fs
        .readdirSync(path.join(dir))
        .filter((file) => file.endsWith(fileType))
        .map((file) => path.join(dir, file))
        .sort(byName);
}
