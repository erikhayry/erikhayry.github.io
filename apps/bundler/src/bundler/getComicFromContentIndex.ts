import type {Comic, PageInfo, PanelInfo} from "@library/types";
import type {DataFileType, ValidatedContentIndex} from "./getSupportedFolderContentIndex.ts";

function byId(a: PageInfo | PanelInfo, b: PageInfo | PanelInfo) {
    return Number.parseFloat(a.id) - Number.parseFloat(b.id)
}

function getSlug(file: DataFileType): string {
    return file.path.split('/').at(-3) as string
}

export function getComicFromContentIndex({comicFile, pages, panels}: ValidatedContentIndex): Comic {
    return {
        slug: getSlug(comicFile),
        pages: pages.map(({data}) => data).sort(byId).map(({layout, id: pageId}) => ({
            layout,
            panels: panels.map(({data}) => data)
                .filter((panel) => panel.id.startsWith(pageId))
                .sort(byId)
        })),
        styles: comicFile.data.styles
    }
}