import {getFolders} from "../files/getFolders.ts";
import {getPageRecord} from "./utils/getPageRecord.ts";
import {type ComicOutput, type PageOutput, type PanelInfo} from "@library/types";
import {error} from "../logger/log.ts";
import {isValidComicOutput} from "./utils/isValidComicOutput.ts";
import {DATA_EXTENSION, OUTPUT_FOLDER} from "../constants";
import {getPageInfo} from "./utils/getPage";

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

function getPageOutput({panels, pageId}: NumberedPageOutput, path: string): PageOutput {
    const page = getPageInfo(`${path}/${OUTPUT_FOLDER}/${pageId}${DATA_EXTENSION}`)

    return {
        layout: page.layout,
        panels
    };
}


function byPageNumber(pageA: NumberedPageOutput, pageB: NumberedPageOutput) {
    return Number.parseFloat(pageA.pageId) - Number.parseFloat(pageB.pageId)
}

function getPages(path: string): PageOutput[] {
    const toPageOutput = (numberedPageLayout: NumberedPageOutput) => getPageOutput(numberedPageLayout, path)

    return Object.entries(getPageRecord(path))
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
