import {readPath} from "../../files/readPath.ts";
import type {PageId, PageInfo as PageInfoOutputType} from "@library/types";
import {PageInfo} from "@library/types";
import {DATA_EXTENSION, OUTPUT_FOLDER} from "../../constants";

export function getPageInfo(filePath: string): PageInfoOutputType {
    return PageInfo.parse(JSON.parse(readPath(filePath)));
}


export function getPageLayout(folderPath: string, pageId: PageId){
    return getPageInfo(`${folderPath}/${OUTPUT_FOLDER}/${pageId}${DATA_EXTENSION}`).layout
}