import {readPath} from "./readPath.ts";

export function getJSON(filePath: string) {
    return JSON.parse(readPath(filePath));
}
