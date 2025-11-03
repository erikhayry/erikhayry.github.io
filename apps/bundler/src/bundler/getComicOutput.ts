import {getFolders} from "../files/getFolders.ts";
import {getPageRecord} from "./utils/getPageRecord.ts";
import {type ComicOutput, type PageOutput, type PanelInfo} from "@library/types";
import {error} from "../logger/log.ts";
import {isValidComicOutput} from "./utils/isValidComicOutput.ts";
import {getPageLayout} from "./utils/getPage";

function byName(a: string, b: string) {
    return a.localeCompare(b);
}

interface NumberedPageOutput {
    pageId: string,
    panels: PanelInfo[]
}

function toNumberedPageOutput([pageId, panels]: [string, PanelInfo[]]): NumberedPageOutput {
    return {pageId, panels};
}

function getPageOutput({panels, pageId}: NumberedPageOutput, folderPath: string): PageOutput {
    return {
        layout: getPageLayout(folderPath, pageId),
        panels
    };
}


function byPageNumber(pageA: NumberedPageOutput, pageB: NumberedPageOutput) {
    return Number.parseFloat(pageA.pageId) - Number.parseFloat(pageB.pageId)
}

function getPages(folderPath: string): PageOutput[] {
    const toPageOutput = (numberedPageLayout: NumberedPageOutput) => getPageOutput(numberedPageLayout, folderPath)

    return Object.entries(getPageRecord(folderPath))
        .map(toNumberedPageOutput)
        .sort(byPageNumber)
        .map(toPageOutput);
}

function toComicOutput(comics: ComicOutput[], path: string) {
    return [
        ...comics,
        {
            path,
            pages: getPages(path)
        }
    ];
}

export function getComicOutput(folderPath: string): ComicOutput[] {
    const outInvalidComicOutput = (folderPath: string) => 'success' in isValidComicOutput(folderPath)
    
    try {
        return getFolders(folderPath)
            .filter(outInvalidComicOutput)
            .sort(byName)
            .reduce(toComicOutput, []);
    } catch (errorMessage) {
        error(errorMessage);
        return [];
    }
}
