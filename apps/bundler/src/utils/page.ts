import {readPath} from "../files/readPath.ts";
import type {PageInfo as PageInfoOutputType, PanelId} from "@library/types";
import {PageId, PageInfo} from "@library/types";
import {DATA_EXTENSION, OUTPUT_FOLDER} from "../constants.ts";

export function getPageInfo(filePath: string): PageInfoOutputType {
    return PageInfo.parse(JSON.parse(readPath(filePath)));
}

export function getPageLayout(folderPath: string, pageId: PageId) {
    return getPageInfo(`${folderPath}/${OUTPUT_FOLDER}/${pageId}${DATA_EXTENSION}`).layout
}

export function getPanelsPageId(panelId: string): PageId {
    const [part1, part2] = panelId.split('.')

    return PageId.parse(`${part1}.${part2}`)
}

export function getPanelsPageInfo(panelId: PanelId) {
    return `${getPanelsPageId(panelId)}${DATA_EXTENSION}`
}