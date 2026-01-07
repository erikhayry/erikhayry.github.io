import {getSupportedFolderContentIndex} from "./getSupportedFolderContentIndex.ts";
import {getValidatedContentIndex} from "./getValidatedContentIndex.ts";
import {getComicFromContentIndex} from "./getComicFromContentIndex.ts";

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

export function bundle({
                           comics,
                           web,
                           type
                       }: BundleConfig) {
    const contentIndex = getSupportedFolderContentIndex(comics.folder)
    const validatedContentIndex = getValidatedContentIndex(contentIndex)
    const comic = getComicFromContentIndex(validatedContentIndex)
    console.log(JSON.stringify(comic))


    //createJSON(web.folder, web.file, getWebsiteFile(comics.folder));
    //copyComicImages(comics.folder, web.folder);
    //createPanelSchema(type.folder, type.schemas.panel)
    //createPanelOutputSchema(type.folder, type.schemas.panelOutput)
}
