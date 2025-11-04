import {getFolders} from "../files/getFolders.ts";
import {getPageRecord} from "./utils/getPageRecord.ts";
import {type ComicOutput, type PageOutput, type PanelInfo} from "@library/types";
import {error} from "../logger/log.ts";
import {getPageLayout} from "../utils/page.ts";
import {byName, byPageNumber} from "../utils/sort.ts";
import {outInvalidComicOutput} from "../utils/filter.ts";
import type {NumberedPageOutput} from "../../types";


function toNumberedPageOutput([pageId, panels]: [string, PanelInfo[]]): NumberedPageOutput {
    return {pageId, panels};
}

function getPageOutput({panels, pageId}: NumberedPageOutput, folderPath: string): PageOutput {
    return {
        layout: getPageLayout(folderPath, pageId),
        panels
    };
}


function getPages(folderPath: string): PageOutput[] {
    const toPageOutput = (numberedPageLayout: NumberedPageOutput) => getPageOutput(numberedPageLayout, folderPath)

    return Object.entries(getPageRecord(folderPath))
        .map(toNumberedPageOutput)
        .sort(byPageNumber)
        .map(toPageOutput);
}

function toComicOutput(comics: ComicOutput[], path: string): ComicOutput[] {
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
