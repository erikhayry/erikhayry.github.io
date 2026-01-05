import type {Comic} from "@library/types";
import type {ContentIndex} from "./getSupportedFolderContentIndex.ts";
import {getComicFile, getComicInfo, getPagesInfo, getPanelsInfo} from "./utils/contentIndexUtils.ts";

export function getComicFromContentIndex(contentIndex: ContentIndex): Comic {
    const comicFile = getComicFile(contentIndex);
    const comicInfo = getComicInfo(contentIndex)
    const pageInfos = getPagesInfo(contentIndex)

    return {
        slug: comicFile!.path.split('/')![1] as string,
        pages: pageInfos.sort((pageA, pageB) =>
            Number.parseFloat(pageA.id) - Number.parseFloat(pageB.id)
        ).map(({layout, id: pageId}) => ({
            layout,
            panels: getPanelsInfo(contentIndex)
                .filter((panel) => panel.id.startsWith(pageId))
                .sort((pageA, pageB) =>
                    Number.parseFloat(pageA.id) - Number.parseFloat(pageB.id)
                )
        })),
        styles: comicInfo!.styles
    }
}