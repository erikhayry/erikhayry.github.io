import {readPath} from "../files/readPath.ts";
import {
    PageId,
    type PageInfo as PageInfoOutputType,
    PageInfo,
    type PageLayoutValue,
    type PanelId
} from "@library/types";
import {DATA_EXTENSION, OUTPUT_FOLDER} from "../constants.ts";

export function getPageInfo(filePath: string): PageInfoOutputType {
    return PageInfo.parse(JSON.parse(readPath(filePath)));
}

export function getPageLayout(folderPath: string, pageId: PageId): PageLayoutValue {
    return getPageInfo(`${folderPath}/${OUTPUT_FOLDER}/${pageId}${DATA_EXTENSION}`).layout
}

export function getPanelsPageId(panelId: string): PageId {
    const [part1, part2] = panelId.split('.')

    return PageId.parse(`${part1}.${part2}`)
}

export function getPanelsPageInfo(panelId: PanelId): string {
    return `${getPanelsPageId(panelId)}${DATA_EXTENSION}`
}