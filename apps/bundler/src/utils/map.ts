import {getJSON} from "../files/getJSON.ts";

export function toJson(filePath: string) {
    return getJSON(filePath)
}
