import {getJSON} from "./getJSON.ts";
import {getPanelOutputs} from "./getPanelOutputs.ts";
import {getOutputFilePath} from "./getOutputFilePath.ts";
import {removeExtension} from "../../files/removeExtension.ts";
import {PanelIdTuple, type PanelInfo} from "@library/types";
import {verifyPanelInfo} from "../../verify/verifyPanelInfo.ts";

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


export function getPageRecord(path: string): Record<string, PanelInfo[]> {
    const toPageRecord = (
        pageRecord: Record<number, PanelInfo[]>,
        numberedPagePageRecord: NumberedPageRecord,
    ) => addToPageRecord(pageRecord, numberedPagePageRecord);
    const toFilePath = (fileName: string) => getOutputFilePath(path, fileName)
    const toJson = (filePath: string) => getJSON(filePath)
    const outOtherOutputFiles = (panelOutPutJson: any) => verifyPanelInfo(panelOutPutJson)
    const toNumberedPageRecord = (panelOutput: PanelInfo) => ({
        pageNumber: getPageNumber(panelOutput.id),
        panelOutput
    });


    return getPanelOutputs(path)
        .map(toFilePath)
        .map(toJson)
        .filter(outOtherOutputFiles)
        .map(toNumberedPageRecord)
        .reduce(toPageRecord, {});
}
