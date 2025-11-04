import {isPanelId, verifyPanelInfo} from "../../verify/verifyPanelInfo.ts";
import {getJSON} from "../../files/getJSON.ts";
import {getOutputFilePath} from "../../files/getOutputFilePath.ts";
import {IMAGE_EXTENSION} from "../../constants.ts";
import {error} from "../../logger/log.ts";
import {isPageId, verifyPageInfo} from "../../verify/verifyPageInfo.ts";
import type {Validation, ValidationError} from "../../../types";
import {outInvalidFileNames} from "../../utils/filter.ts";
import {getOutputFiles} from "../../files/getOutputFiles.ts";
import {getOutputJSONS} from "../../files/getOutputJSONS.ts";
import {hasNoFiles} from "../../files/hasNoFiles.ts";
import {getPanelsPageInfo} from "../../utils/page.ts";
import type {PanelId} from "@library/types";
import {getPanelId} from "../../utils/panel.ts";
import {getOutputImages} from "../../files/getOutputImages.ts";


function hasImage(folderPath: string, panelId: string) {
    return getOutputImages(folderPath).some(
        (imageFileName) => imageFileName === `${panelId}${IMAGE_EXTENSION}`,
    );
}


function hasPageInfo(folderPath: string, panelId: PanelId) {
    return getOutputJSONS(folderPath).some(
        (jsonFileName) => jsonFileName === getPanelsPageInfo(panelId),
    );
}

function getInvalidFileNames(folderPath: string): string[] {
    return getOutputFiles(folderPath).filter(outInvalidFileNames)
}

function isValidPanelDataId(folderPath: string, fileName: string) {
    return isPanelId(fileName) && verifyPanelInfo(getJSON(getOutputFilePath(folderPath, fileName)))
}

function isValidPageDataId(folderPath: string, fileName: string) {
    return isPageId(fileName) && verifyPageInfo(getJSON(getOutputFilePath(folderPath, fileName)))
}

function getInvalidData(folderPath: string): string[] {
    const isInvalidData = (fileName: string) => {
        return !isValidPanelDataId(folderPath, fileName) && !isValidPageDataId(folderPath, fileName);
    }

    return getOutputFiles(folderPath).filter(isInvalidData)
}

function getPanelsWithoutImage(folderPath: string): string[] {
    const isWithoutImage = (fileName: string) => {
        return isPanelId(fileName) && !hasImage(folderPath, getPanelId(folderPath, fileName));
    }

    return getOutputFiles(folderPath).filter(isWithoutImage);
}

function getPanelsWithoutPageInfo(folderPath: string): string[] {
    const isWithoutPageInfo = (fileName: string) => {
        return isPanelId(fileName) && !hasPageInfo(folderPath, getPanelId(folderPath, fileName));
    }

    return getOutputFiles(folderPath).filter(isWithoutPageInfo);
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
