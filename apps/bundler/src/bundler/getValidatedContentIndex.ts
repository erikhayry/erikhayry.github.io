import {type ContentIndex, type ValidatedContentIndex} from "./getSupportedFolderContentIndex.ts";
import {getComicFile, getValidImages} from "./utils/contentIndexUtils.ts";
import {ComicInfo} from "@library/types";

export const ERROR = {
    MISSING_COMIC_FILE: 'Comic file is missing in content index',
    MALFORMED_COMIC_FILE: 'Comic data is malformed',
    COMIC_IMAGE_MISSING: 'One or more comic images are missing',
    PANEL_IMAGE_MISSING: 'One or more panel images are missing',
}


export function getValidatedContentIndex(contentIndex: ContentIndex): ValidatedContentIndex {
    const comicFile = getComicFile(contentIndex)

    if (!comicFile) {
        throw new Error(ERROR.MISSING_COMIC_FILE)
    }

    if (!ComicInfo.safeParse(comicFile.data).success) {
        throw new Error(ERROR.MALFORMED_COMIC_FILE)
    }

    return {
        comicFile: comicFile,
        images: getValidImages(contentIndex),
    }
}