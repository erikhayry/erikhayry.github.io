import type {Comic} from "@library/types";
import type {DataFileType, ValidatedContentIndex} from "./getSupportedFolderContentIndex.ts";


function getSlug(file: DataFileType): string {
    return file.path.split('/').at(-3) as string
}

export function getComicFromContentIndex({comicFile, pages, panels}: ValidatedContentIndex): Comic {
    return {
        slug: getSlug(comicFile),
        pages: pages.map(({data}) => data).map(({layout, id: pageId}) => ({
            layout,
            panels: panels.map(({data}) => data)
                .filter((panel) => panel.id.startsWith(pageId))
        })),
        styles: comicFile.data.styles
    }
}