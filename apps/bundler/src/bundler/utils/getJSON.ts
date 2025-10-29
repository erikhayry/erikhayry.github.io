import {readPath} from "../../files/readPath.ts";

export function getJSON(filePath: string) {
    return JSON.parse(readPath(filePath));
}
