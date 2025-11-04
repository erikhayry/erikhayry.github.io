import {isValidComicOutput} from "../bundler/utils/isValidComicOutput.ts";
import {verifyPanelInfo} from "../verify/verifyPanelInfo.ts";
import {isValidFileName} from "../verify/verifyFiles.ts";

export function outInvalidComicOutput(folderPath: string) {
    return 'success' in isValidComicOutput(folderPath)
}

export function outNonPanelOutputFiles(panelOutPutJson: any) {
    return verifyPanelInfo(panelOutPutJson)
}


export function outInvalidFileNames(fileName: string): boolean {
    return !isValidFileName(fileName)
}