import {isPanelId, verifyPanelInfo} from "../../verify/verifyPanelInfo.ts";
import {getJSON} from "../../files/getJSON.ts";
import {getOutputFilePath} from "../../files/getOutputFilePath.ts";
import {error} from "../../logger/log.ts";
import {isPageId, verifyPageInfo} from "../../verify/verifyPageInfo.ts";
import type {Validation, ValidationError} from "../../../types";
import {outInvalidFileNames} from "../../utils/filter.ts";
import {getOutputJSONS} from "../../files/getOutputJSONS.ts";
import {hasNoFiles} from "../../files/hasNoFiles.ts";
import {getPanelsPageInfo} from "../../utils/page.ts";
import {ComicStyle, ComicStyleType, type PanelId} from "@library/types";
import {getPanelId} from "../../utils/panel.ts";
import {getOutputImages} from "../../files/getOutputImages.ts";
import {getImageName} from "../../utils/image.ts";
import {isComicInfoFile, verifyComicInfo} from "../../verify/verifyComicInfo.ts";


function hasImage(folderPath: string, panelId: string, comicStyle: ComicStyleType) {
    return getOutputImages(folderPath).some(
        (imageFileName) => imageFileName === getImageName(panelId, comicStyle),
    );
}

function hasPageInfo(folderPath: string, panelId: PanelId) {
    return getOutputJSONS(folderPath).some(
        (jsonFileName) => jsonFileName === getPanelsPageInfo(panelId),
    );
}

function getInvalidFileNames(folderPath: string): string[] {
    return getOutputJSONS(folderPath).filter(outInvalidFileNames)
}

function isValidPanelDataId(folderPath: string, fileName: string) {
    return isPanelId(fileName) && verifyPanelInfo(getJSON(getOutputFilePath(folderPath, fileName)))
}

function isValidPageDataId(folderPath: string, fileName: string) {
    return isPageId(fileName) && verifyPageInfo(getJSON(getOutputFilePath(folderPath, fileName)))
}

function isValidComicData(folderPath: string, fileName: string) {
    return isComicInfoFile(fileName) && verifyComicInfo(getJSON(getOutputFilePath(folderPath, fileName)))
}

function getInvalidData(folderPath: string): string[] {
    const isInvalidData = (fileName: string) => {
        return !isValidPanelDataId(folderPath, fileName) && !isValidPageDataId(folderPath, fileName) && !isValidComicData(folderPath, fileName);
    }

    return getOutputJSONS(folderPath).filter(isInvalidData)
}

function getPanelsWithoutImage(folderPath: string): string[] {
    const isWithoutImage = (fileName: string) => {
        return isPanelId(fileName) && !hasImage(folderPath, getPanelId(folderPath, fileName), ComicStyle.SIMPLIFIED_LINE_DRAWING);
    }

    return getOutputJSONS(folderPath).filter(isWithoutImage);
}

function getPanelsWithoutPageInfo(folderPath: string): string[] {
    const isWithoutPageInfo = (fileName: string) => {
        return isPanelId(fileName) && !hasPageInfo(folderPath, getPanelId(folderPath, fileName));
    }

    return getOutputJSONS(folderPath).filter(isWithoutPageInfo);
}


function getError(message: string): ValidationError {
    error(message);

    return {
        error: message
    };
}

export function isValidComicOutput(folderPath: string): Validation {
    if (hasNoFiles(folderPath)) {
        return getError(`${folderPath} has no files`)
    }

    if (getInvalidFileNames(folderPath).length) {
        return getError(`${folderPath} has invalid file names: ${getInvalidFileNames(folderPath)}`)
    }

    if (getInvalidData(folderPath).length) {
        return getError(`${folderPath} has invalid data: ${getInvalidData(folderPath)}`)
    }

    if (getPanelsWithoutImage(folderPath).length) {
        return getError(`${folderPath} has panels without images: ${getPanelsWithoutImage(folderPath)}`)
    }

    if (getPanelsWithoutPageInfo(folderPath).length) {
        return getError(`${folderPath} has panels without page info: ${getPanelsWithoutPageInfo(folderPath)}`)
    }

    return {
        success: true
    };
}
