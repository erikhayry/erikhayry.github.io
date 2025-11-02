import {getImages, getJSONS} from "../../files/getFileNames.ts";
import {PageId, PanelId} from "@library/types";
import {verifyPanelInfo} from "../../verify/verifyPanelInfo.ts";
import {getJSON} from "./getJSON.ts";
import {getOutputFilePath} from "./getOutputFilePath.ts";
import {removeExtension} from "../../files/removeExtension.ts";
import {DATA_EXTENSION, IMAGE_EXTENSION, OUTPUT_FOLDER} from "../../constants.ts";
import {error} from "../../logger/log.ts";
import {verifyPageInfo} from "../../verify/verifyPageInfo.ts";

function isPanelId(fileName: string) {
    return PanelId.safeParse(removeExtension(fileName)).success
}

function isPageId(fileName: string) {
    return PageId.safeParse(removeExtension(fileName)).success
}

function isValidFileName(fileName: string) {
    return isPanelId(fileName) || isPageId(fileName)
}

function outInvalidFileNames(fileName: string): boolean {
    return !isValidFileName(fileName)
}

function getOutputFiles(folderPath: string) {
    return getJSONS(`${folderPath}/${OUTPUT_FOLDER}`);
}

function getPanelId(filePath: string) {
    return getJSON(filePath).id;
}

function hasImage(path: string, panelId: string) {
    return getImages(`${path}/${OUTPUT_FOLDER}`).some(
        (imageFileName) => imageFileName === `${panelId}${IMAGE_EXTENSION}`,
    );
}

function getPanelsPageId(panelId: string): PageId {
    const [part1, part2] = panelId.split('.')

    return PageId.parse(`${part1}.${part2}`)
}

function hasPageInfo(path: string, panelId: string) {
    return getJSONS(`${path}/${OUTPUT_FOLDER}`).some(
        (jsonFileName) => jsonFileName === `${getPanelsPageId(panelId)}${DATA_EXTENSION}`,
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

function getInvalidIds(folderPath: string): string[] {
    const isInvalidId = (fileName: string) => {
        return !isValidPanelDataId(folderPath, fileName) && !isValidPageDataId(folderPath, fileName);
    }

    return getOutputFiles(folderPath).filter(isInvalidId)
}

function getPanelsWithoutImage(folderPath: string): string[] {
    const isWithoutImage = (fileName: string) => {
        return isPanelId(fileName) && !hasImage(folderPath, getPanelId(getOutputFilePath(folderPath, fileName)));
    }

    return getOutputFiles(folderPath).filter(isWithoutImage);
}

function getPanelsWithoutPageInfo(folderPath: string): string[] {
    const isWithoutPageInfo = (fileName: string) => {
        return isPanelId(fileName) && !hasPageInfo(folderPath, getPanelId(getOutputFilePath(folderPath, fileName)));
    }

    return getOutputFiles(folderPath).filter(isWithoutPageInfo);
}

function hasNoFiles(folderPath: string) {
    return getOutputFiles(folderPath).length === 0;
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

    if (getInvalidIds(folderPath).length) {
        error(`${folderPath} has invalid panel ids: ${getInvalidIds(folderPath)}`);
        return false;
    }

    if (getPanelsWithoutImage(folderPath).length) {
        error(`${folderPath} has panels without images: ${getPanelsWithoutImage(folderPath)}`);
        return false;
    }

    if (getPanelsWithoutPageInfo(folderPath).length) {
        error(`${folderPath} has panels without page info: ${getPanelsWithoutPageInfo(folderPath)}`);
        return false;
    }

    return true;
}
