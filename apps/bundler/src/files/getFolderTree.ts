import fs from "fs";
import path from "path";
import {isFolder} from "./isFolder.ts";


function getDirectories(dir: string) {
    return fs.readdirSync(dir)
        .map(file => path.join(dir, file))
        .filter(isFolder);
}

export function getFolderTree(dir: string): string[] {
    return [dir, ...getDirectories(dir).map(getFolderTree).flat()];
}