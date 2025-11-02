import {getFolders} from "../files/getFolders.ts";
import {getPageRecord} from "./utils/getPageRecord.ts";
import {isValidComicOutput as outInvalidComicOutput} from "./utils/isValidComicOutput.ts";
import {type ComicOutput, PageLayout, type PageOutput, type PanelInfo} from "@library/types";
import {error} from "../logger/log.ts";

function byName(a: string, b: string) {
    return a.localeCompare(b);
}

interface NumberedPageOutput {
    pageNumber: string,
    panels: PanelInfo[]
}

function toNumberedPageOutput([pageNumber, panels]: [string, PanelInfo[]]): NumberedPageOutput {
    return {pageNumber, panels};
}

function toPageOutput({panels}: NumberedPageOutput): PageOutput {
    return {
        layout: PageLayout.Hero,
        panels
    };
}


function byPageNumber(pageA: NumberedPageOutput, pageB: NumberedPageOutput) {
    return parseFloat(pageA.pageNumber) - parseFloat(pageB.pageNumber)
}

function getPages(path: string): PageOutput[] {
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
