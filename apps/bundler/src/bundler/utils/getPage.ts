import {readPath} from "../../files/readPath.ts";
import type {PageInfoOutput as PageInfoOutputType} from "@library/types";
import {PageInfoOutput} from "@library/types";

export function getPageInfo(filePath: string): PageInfoOutputType {
    return PageInfoOutput.parse(JSON.parse(readPath(filePath)));
}
