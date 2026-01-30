import {ComicStyle, type ComicStyleType, PageLayout, type PageLayoutValue} from "@library/types";
import {FileVariant, type ImageFileType, type ValidatedContentIndex} from "../../getSupportedFolderContentIndex.ts";
import {ImageVariant} from "../../../files/getImage.ts";

export const COMIC_STYLES_MOCK: ComicStyleType[] = [
    "AN",
]

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
            id: `${pageId}.1.${index + 1}.${format === 'landscape' ? 'l' : 'p'}`,
            path: `mocks/comics/output/panels/AN/${pageId}.1.${index + 1}.png`,
        },
        {
            ...(format === 'landscape' ? BASE_BE_LANDSCAPE_IMAGE : BASE_BE_PORTRAIT_IMAGE),
            id: `${pageId}.1.${index + 1}.${format === 'landscape' ? 'l' : 'p'}`,
            path: `mocks/comics/output/panels/AN/${pageId}.1.${index + 1}.png`,
        },
    ]).flat()
}

function getPageLayout(id: string) {
    return {
        "id": id,
        "description": {
            "en": "DESCRIPTION EN MOCK",
            "se": "DESCRIPTION SE MOCK"
        },
        "info": "VALID WITH IMAGE",
        "narration": {
            "en": "NARRATION_1.1.1_1",
            "se": "NARRATION_1.1.1_1"
        }
    }
}


export const HERO_LAYOUT = {
    "layout": PageLayout.Hero,
    "panels": [getPageLayout('1.1.1')],
}

export const VERTICAL_DIPTYCH_LAYOUT = {
    "layout": PageLayout.VerticalDiptych,
    "panels": [getPageLayout('1.1.1'), getPageLayout('1.1.2')],
}

export const QUAD_LAYOUT = {
    "layout": PageLayout.Quad,
    "panels": [getPageLayout('1.1.1'), getPageLayout('1.1.2'), getPageLayout('1.1.3'), getPageLayout('1.1.3')],
}

export const VALID_COMIC_DATA_MOCK = {
    path: 'mocks/comics/output/comic.json',
    type: FileVariant.DATA,
    id: 'comic',
    data: {
        "styles": COMIC_STYLES_MOCK,
        "slug": "comic-1",
        "pages": [HERO_LAYOUT],
        "title": {
            "en": "English Title",
            "se": "Svensk titel"
        }
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
]

export const VALID_PAGE_LAYOUT_2 = [
    ...VALID_IMAGES_PAGE_LAYOUT_2,
]

export const VALID_PAGE_LAYOUT_3 = [
    ...VALID_IMAGES_PAGE_LAYOUT_3,
]

export const VALID_PAGE_LAYOUT_4 = [
    ...VALID_IMAGES_PAGE_LAYOUT_4,
]

export const VALID_PAGE_DATA = [
    ...VALID_PAGE_LAYOUT_1,
    ...VALID_PAGE_LAYOUT_2,
    ...VALID_PAGE_LAYOUT_3,
    ...VALID_PAGE_LAYOUT_4
]

export const VALID_COMIC_INDEX = [
    ...VALID_COMIC_DATA,
    ...VALID_PAGE_DATA,
]

export const VALIDATED_CONTENT_INDEX: ValidatedContentIndex = {
    comicFile: VALID_COMIC_DATA_MOCK,
    images: [],
}