import {getSupportedFolderContentIndex} from "./getSupportedFolderContentIndex.ts";
import {getValidatedContentIndex} from "./getValidatedContentIndex.ts";
import {createJSON} from "../files/createJSON.ts";
import {copyComicImages} from "./utils/copyComicImages.ts";
import {createPanelOutputSchema, createPanelSchema} from "../files/schemas.ts";
import {getFolders} from "../files/getFolders.ts";

export interface TypeConfig {
    folder: string;
    schemas: {
        panel: string
        panelOutput: string
    }
}

export interface WebConfig {
    folder: string;
    file: string;
}

export interface ComicsConfig {
    folder: string;
}


export interface BundleConfig {
    comics: ComicsConfig;
    web: WebConfig;
    type: TypeConfig
}

function getComics(comicsFolder: string) {
    return getFolders(comicsFolder).map((comicFolder) => {
        const contentIndex = getSupportedFolderContentIndex(comicFolder)
        const validatedContentIndex = getValidatedContentIndex(contentIndex)

        return validatedContentIndex.comicFile.data
    })
}

export function bundle({
                           comics,
                           web,
                           type
                       }: BundleConfig) {
    const website = getComics(comics.folder)
    createJSON(web.folder, web.file, website);
    copyComicImages(comics.folder, web.folder, website);
    createPanelSchema(type.folder, type.schemas.panel)
    createPanelOutputSchema(type.folder, type.schemas.panelOutput)
}
