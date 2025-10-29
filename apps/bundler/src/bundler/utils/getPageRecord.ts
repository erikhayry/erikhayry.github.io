import {getJSON} from "./getJSON.ts";
import {getPanelOutputs} from "./getPanelOutputs.ts";
import {getOutputFilePath} from "./getOutputFilePath.ts";
import {removeExtension} from "../../files/removeExtension.ts";
import {PanelIdTuple, type PanelOutput} from "@library/types";
import {verifyPanelOutput} from "../../verify/verifyPanelOutput.ts";

interface NumberedPageRecord {
    pageNumber: string,
    panelOutput: PanelOutput
}

function getPageNumber(panelId: string) {
    const idTuplet = PanelIdTuple.parse(removeExtension(panelId).split("."));

    return `${idTuplet[0]}.${idTuplet[1]}`;
}

function addToPageRecord(
    pageRecord: Record<string, PanelOutput[]>,
    {pageNumber, panelOutput}: NumberedPageRecord,
): Record<string, PanelOutput[]> {
    if (pageRecord[pageNumber]) {
        pageRecord[pageNumber].push(panelOutput);
    } else {
        pageRecord[pageNumber] = [panelOutput];
    }
    return pageRecord;
}


export function getPageRecord(path: string): Record<string, PanelOutput[]> {
    const toPageRecord = (
        pageRecord: Record<number, PanelOutput[]>,
        numberedPagePageRecord: NumberedPageRecord,
    ) => addToPageRecord(pageRecord, numberedPagePageRecord);
    const toFilePath = (fileName: string) => getOutputFilePath(path, fileName)
    const toJson = (filePath: string) => getJSON(filePath)
    const outOtherOutputFiles = (panelOutPutJson: any) => verifyPanelOutput(panelOutPutJson)
    const toNumberedPageRecord = (panelOutput: PanelOutput) => ({
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
