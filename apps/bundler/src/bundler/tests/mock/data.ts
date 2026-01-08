import {ComicStyle, type ComicStyleType, PageLayout, type PageLayoutValue} from "@library/types";
import {
    FileVariant,
    type ImageFileType,
    type PageDataFileType,
    type PanelDataFileType,
    type ValidatedContentIndex
} from "../../getSupportedFolderContentIndex.ts";
import {ImageVariant} from "../../../files/getImage.ts";

export const COMIC_STYLES_MOCK: ComicStyleType[] = [
    "AN",
    "BE"
]

function getPageFile(id: number, layout: PageLayoutValue): PageDataFileType {
    return {
        path: `mocks/comics/output/${id}.1.json`,
        type: FileVariant.DATA,
        id: `${id}.1`,
        data: {
            id: `${id}.1`,
            layout
        }
    }
}

function getPanelFile(pageId: number, panelId: number): PanelDataFileType {
    return {
        path: `mocks/comics/output/${pageId}.1.${panelId}json`,
        type: FileVariant.DATA,
        id: `${pageId}.1.${panelId}`,
        data: {
            id: `${pageId}.1.${panelId}`,
            "description": {
                "en": `DESCRIPTION_${pageId}.1.${panelId}`,
                "se": `DESCRIPTION_${pageId}.1.${panelId}`
            },
            "info": "VALID WITH IMAGE",
            "narration": {
                "en": `NARRATION_${pageId}.1.${panelId}`,
                "se": `NARRATION_${pageId}.1.${panelId}`
            }
        }
    }
}

function getNumberOfImages(layout: PageLayoutValue) {
    switch (layout) {
        case "1":
            return 1
        case "2":
        case "3":
            return 2
        case "4":
            return 4
    }
}

function getImageFiles(pageId: number, layout: PageLayoutValue, format: 'landscape' | 'portrait'): ImageFileType[] {
    return Array.from({length: getNumberOfImages(layout)}, (_, index) => index).map((index) => [
        {
            ...(format === 'landscape' ? BASE_AN_LANDSCAPE_IMAGE : BASE_AN_PORTRAIT_IMAGE),
            id: `${pageId}.1.${index}`,
            path: `mocks/comics/output/panels/AN/${pageId}.1.${index}.png`,
        },
        {
            ...(format === 'landscape' ? BASE_BE_LANDSCAPE_IMAGE : BASE_BE_PORTRAIT_IMAGE),
            id: `${pageId}.1.${index}`,
            path: `mocks/comics/output/panels/AN/${pageId}.1.${index}.png`,
        },
    ]).flat()
}

export const VALID_COMIC_DATA_MOCK = {
    path: 'mocks/comics/output/comic.json',
    type: FileVariant.DATA,
    id: 'comic',
    data: {
        "styles": COMIC_STYLES_MOCK
    }
}

export const BASE_IMAGE = {
    type: FileVariant.IMAGE,
}
export const BASE_LANDSCAPE_IMAGE = {
    ...BASE_IMAGE,
    height: 1536,
    width: 1024,
    variant: ImageVariant.LANDSCAPE,
}
export const BASE_PORTRAIT_IMAGE = {
    ...BASE_IMAGE,
    height: 1024,
    width: 1536,
    variant: ImageVariant.PORTRAIT
    ,
}
export const BASE_AN_LANDSCAPE_IMAGE = {
    ...BASE_LANDSCAPE_IMAGE,
    style: ComicStyle.ANIME
}
export const BASE_AN_PORTRAIT_IMAGE = {
    ...BASE_PORTRAIT_IMAGE,
    style: ComicStyle.ANIME
}
export const BASE_BE_LANDSCAPE_IMAGE = {
    ...BASE_LANDSCAPE_IMAGE,
    style: ComicStyle.BELGIAN_COMIC
}
export const BASE_BE_PORTRAIT_IMAGE = {
    ...BASE_PORTRAIT_IMAGE,
    style: ComicStyle.BELGIAN_COMIC
}
export const VALID_COMIC_AN_LANDSCAPE_IMAGE = {
    ...BASE_AN_LANDSCAPE_IMAGE,
    id: "comic.l",
    path: "mocks/comics/output/panels/AN/comic.l.png",
}
export const VALID_COMIC_AN_PORTRAIT_IMAGE = {
    ...BASE_AN_PORTRAIT_IMAGE,
    id: "comic.p",
    path: "mocks/comics/output/panels/AN/comic.p.png",
}
export const VALID_COMIC_BE_LANDSCAPE_IMAGE = {
    ...BASE_BE_LANDSCAPE_IMAGE,
    id: "comic.l",
    path: "mocks/comics/output/panels/BE/comic.l.png",
}
export const VALID_COMIC_BE_PORTRAIT_IMAGE = {
    ...BASE_BE_PORTRAIT_IMAGE,
    id: "comic.p",
    path: "mocks/comics/output/panels/BE/comic.p.png",
}

export const VALID_PAGE_LAYOUT_1_DATA_MOCK = getPageFile(1, PageLayout.Hero)
export const VALID_PAGE_LAYOUT_2_DATA_MOCK = getPageFile(2, PageLayout.VerticalDiptych)
export const VALID_PAGE_LAYOUT_3_DATA_MOCK = getPageFile(3, PageLayout.LandscapeDiptych)
export const VALID_PAGE_LAYOUT_4_DATA_MOCK = getPageFile(4, PageLayout.Quad)

export const VALID_PANEL_DATA_MOCK_1_1 = getPanelFile(1, 1)

export const VALID_PANEL_DATA_MOCK_2_1 = getPanelFile(2, 1)
export const VALID_PANEL_DATA_MOCK_2_2 = getPanelFile(2, 2)

export const VALID_PANEL_DATA_MOCK_3_1 = getPanelFile(3, 1)
export const VALID_PANEL_DATA_MOCK_3_2 = getPanelFile(3, 2)

export const VALID_PANEL_DATA_MOCK_4_1 = getPanelFile(4, 1)
export const VALID_PANEL_DATA_MOCK_4_2 = getPanelFile(4, 2)
export const VALID_PANEL_DATA_MOCK_4_3 = getPanelFile(4, 3)
export const VALID_PANEL_DATA_MOCK_4_4 = getPanelFile(4, 4)


export const VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_1 = [
    ...getImageFiles(1, PageLayout.Hero, 'landscape'),
]

export const VALID_PORTRAIT_IMAGES_PAGE_LAYOUT_1 = [
    ...getImageFiles(1, PageLayout.Hero, 'portrait'),
]

export const VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_2 = [
    ...getImageFiles(2, PageLayout.VerticalDiptych, 'landscape'),
]

export const VALID_PORTRAIT_IMAGES_PAGE_LAYOUT_2 = [
    ...getImageFiles(2, PageLayout.VerticalDiptych, 'portrait'),
]

export const VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_3 = [
    ...getImageFiles(3, PageLayout.LandscapeDiptych, 'landscape'),
]

export const VALID_PORTRAIT_IMAGES_PAGE_LAYOUT_3 = [
    ...getImageFiles(3, PageLayout.LandscapeDiptych, 'portrait'),
]

export const VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_4 = [
    ...getImageFiles(4, PageLayout.Quad, 'landscape'),
]

export const VALID_PORTRAIT_IMAGES_PAGE_LAYOUT_4 = [
    ...getImageFiles(4, PageLayout.Quad, 'portrait'),
]

export const VALID_IMAGES_PAGE_LAYOUT_1 = [
    ...VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_1,
    ...VALID_PORTRAIT_IMAGES_PAGE_LAYOUT_1,
]

export const VALID_IMAGES_PAGE_LAYOUT_2 = [
    ...VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_2,
    ...VALID_PORTRAIT_IMAGES_PAGE_LAYOUT_2,
]

export const VALID_IMAGES_PAGE_LAYOUT_3 = [
    ...VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_3,
    ...VALID_PORTRAIT_IMAGES_PAGE_LAYOUT_3,
]


export const VALID_IMAGES_PAGE_LAYOUT_4 = [
    ...VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_4,
    ...VALID_PORTRAIT_IMAGES_PAGE_LAYOUT_4,
]

export const VALID_COMIC_DATA = [
    VALID_COMIC_AN_LANDSCAPE_IMAGE,
    VALID_COMIC_AN_PORTRAIT_IMAGE,
    VALID_COMIC_BE_LANDSCAPE_IMAGE,
    VALID_COMIC_BE_PORTRAIT_IMAGE,
    VALID_COMIC_DATA_MOCK
]

export const VALID_PAGE_LAYOUT_1 = [
    ...VALID_IMAGES_PAGE_LAYOUT_1,
    VALID_PAGE_LAYOUT_1_DATA_MOCK,
    VALID_PANEL_DATA_MOCK_1_1,
]

export const VALID_PAGE_LAYOUT_2 = [
    ...VALID_IMAGES_PAGE_LAYOUT_2,
    VALID_PAGE_LAYOUT_2_DATA_MOCK,
    VALID_PANEL_DATA_MOCK_2_1,
    VALID_PANEL_DATA_MOCK_2_2,
]

export const VALID_PAGE_LAYOUT_3 = [
    ...VALID_IMAGES_PAGE_LAYOUT_3,
    VALID_PAGE_LAYOUT_3_DATA_MOCK,
    VALID_PANEL_DATA_MOCK_3_1,
    VALID_PANEL_DATA_MOCK_3_2,
]

export const VALID_PAGE_LAYOUT_4 = [
    ...VALID_IMAGES_PAGE_LAYOUT_4,
    VALID_PAGE_LAYOUT_4_DATA_MOCK,
    VALID_PANEL_DATA_MOCK_4_1,
    VALID_PANEL_DATA_MOCK_4_2,
    VALID_PANEL_DATA_MOCK_4_3,
    VALID_PANEL_DATA_MOCK_4_4,
]

export const VALID_PAGE_DATA = [
    ...VALID_PAGE_LAYOUT_1,
    ...VALID_PAGE_LAYOUT_2,
    ...VALID_PAGE_LAYOUT_3,
    ...VALID_PAGE_LAYOUT_4
]

export const VALID_COMIC_INDEX = [
    ...VALID_COMIC_DATA,
    ...VALID_PAGE_DATA
]

export const VALIDATED_CONTENT_INDEX: ValidatedContentIndex = {
    comicFile: VALID_COMIC_DATA_MOCK,
    pages: [VALID_PAGE_LAYOUT_1_DATA_MOCK],
    panels: [VALID_PANEL_DATA_MOCK_1_1],
    images: []
}