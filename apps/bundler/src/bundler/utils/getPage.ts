import {readPath} from "../../files/readPath.ts";
import type {PageInfo as PageInfoOutputType} from "@library/types";
import {PageInfo} from "@library/types";

export function getPageInfo(filePath: string): PageInfoOutputType {
    return PageInfo.parse(JSON.parse(readPath(filePath)));
}
