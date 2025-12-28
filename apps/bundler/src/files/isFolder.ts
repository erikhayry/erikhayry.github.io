import fs from "fs";

export function isFolder(path: string) {
    return fs.statSync(path).isDirectory()
}