import {getOutputFilePath} from "../../files/getOutputFilePath.ts";
import {removeExtension} from "../../files/removeExtension.ts";
import {PanelIdTuple, type PanelInfo} from "@library/types";
import {toJson} from "../../utils/map.ts";
import {outNonPanelOutputFiles} from "../../utils/filter.ts";
import {getOutputJSONS} from "../../files/getOutputJSONS.ts";

interface NumberedPageRecord {
    pageNumber: string,
    panelOutput: PanelInfo
}

function getPageNumber(panelId: string) {
    const idTuplet = PanelIdTuple.parse(removeExtension(panelId).split("."));

    return `${idTuplet[0]}.${idTuplet[1]}`;
}

function addToPageRecord(
    pageRecord: Record<string, PanelInfo[]>,
    {pageNumber, panelOutput}: NumberedPageRecord,
): Record<string, PanelInfo[]> {
    if (pageRecord[pageNumber]) {
        pageRecord[pageNumber].push(panelOutput);
    } else {
        pageRecord[pageNumber] = [panelOutput];
    }
    return pageRecord;
}

function toPageRecord(
    pageRecord: Record<number, PanelInfo[]>,
    numberedPagePageRecord: NumberedPageRecord,
) {
    return addToPageRecord(pageRecord, numberedPagePageRecord)
}

function toNumberedPageRecord(panelOutput: PanelInfo) {
    return {
        pageNumber: getPageNumber(panelOutput.id),
        panelOutput
    }
}


export function getPageRecord(folderPath: string): Record<string, PanelInfo[]> {
    const toFilePath = (fileName: string) => getOutputFilePath(folderPath, fileName)

    return getOutputJSONS(folderPath)
        .map(toFilePath)
        .map(toJson)
        .filter(outNonPanelOutputFiles)
        .map(toNumberedPageRecord)
        .reduce(toPageRecord, {});
}
