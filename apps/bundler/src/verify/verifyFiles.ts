import {isPanelId} from "./verifyPanelInfo.ts";
import {isPageId} from "./verifyPageInfo.ts";
import {isComicInfoFile} from "./verifyComicInfo.ts";

export function isValidFileName(fileName: string) {
    return isPanelId(fileName) || isPageId(fileName) || isComicInfoFile(fileName)
}
