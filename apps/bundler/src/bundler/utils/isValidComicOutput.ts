import {getImages, getJSONS} from "../../files/getFileNames.ts";
import {PanelId} from "@library/types";
import {verifyPanelOutput} from "../../verify/verifyPanelOutput.ts";
import {getPanel} from "./getPanel.ts";
import {getOutputFilePath} from "./getOutputFilePath.ts";
import {removeExtension} from "../../files/removeExtension.ts";
import {IMAGE_EXTENSION, OUTPUT_FOLDER} from "../../constants.ts";
import {error} from "../../logger/log.ts";

function isInvalidFilenames(fileName: string): boolean {
    return !PanelId.safeParse(removeExtension(fileName)).success
}

function getPanelDataFiles(folderPath: string) {
    return getJSONS(`${folderPath}/${OUTPUT_FOLDER}`);
}

function getPanelId(filePath: string) {
    return getPanel(filePath).id;
}

function hasImage(path: string, panelId: string) {
    return getImages(`${path}/${OUTPUT_FOLDER}`).some(
        (imageFileName) => imageFileName === `${panelId}${IMAGE_EXTENSION}`,
    );
}

function getInvalidFileNames(folderPath: string): string[] {
    return getPanelDataFiles(folderPath).filter(isInvalidFilenames)
}

function getInvalidPanelIds(folderPath: string): string[] {
    const isInvalidPanelId = (fileName: string) => {
        return !verifyPanelOutput(getPanel(getOutputFilePath(folderPath, fileName)));
    }

    return getPanelDataFiles(folderPath).filter(isInvalidPanelId)
}

function getPanelWithoutImage(folderPath: string): string[] {
    const isWithoutImage = (fileName: string) => {
        return !hasImage(folderPath, getPanelId(getOutputFilePath(folderPath, fileName)));
    }

    return getPanelDataFiles(folderPath).filter(isWithoutImage);
}

function hasNoFiles(folderPath: string) {
    return getPanelDataFiles(folderPath).length === 0;
}

export function isValidComicOutput(folderPath: string) {
    if (hasNoFiles(folderPath)) {
        error(`${folderPath} has no files`);
        return false;
    }

    if (getInvalidFileNames(folderPath).length) {
        error(`${folderPath} has invalid file names: ${getInvalidFileNames(folderPath)}`);
        return false;
    }

    if (getInvalidPanelIds(folderPath).length) {
        error(`${folderPath} has invalid panel ids: ${getInvalidPanelIds(folderPath)}`);
        return false;
    }

    if (getPanelWithoutImage(folderPath).length) {
        error(`${folderPath} has panels without images: ${getPanelWithoutImage(folderPath)}`);
        return false;
    }

    return true;
}
