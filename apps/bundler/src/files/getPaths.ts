import fs from "fs";
import path from "path";
import {byName} from "../utils/sort.ts";
import {isFolder} from "./isFolder.ts";

export function getPaths(dir: string): string[] {
    return fs
        .readdirSync(path.join(dir))
        .map((file) => path.join(dir, file))
        .filter((path) => !isFolder(path))
        .sort(byName);
}
