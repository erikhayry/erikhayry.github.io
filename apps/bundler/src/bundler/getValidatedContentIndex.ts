import {
    type ContentIndex,
    type DataFileType,
    type FileType,
    FileVariant,
    type ImageFileType,
    type ValidatedContentIndex
} from "./getSupportedFolderContentIndex.ts";
import {
    ComicId,
    ComicInfo,
    ComicStyle,
    type ComicStyleType,
    DataId,
    PageId,
    PageInfo,
    PageLayout,
    PanelId,
    PanelInfo
} from "@library/types";
import {z} from "zod";
import {
    getComicFile,
    getLandscapeImages,
    getPageFiles,
    getPagesInfo,
    getPanelFiles,
    getPortraitImages,
    getValidImages,
    hasImageFile
} from "./utils/contentIndexUtils.ts";
import {ImageVariant} from "../files/getImage.ts";


export const FILE_VALIDATION = {
    COMIC_DATA_FILE: 'comic data file',
    PANEL_DATA_FILE: 'panel data file',
    COMIC_DATA_PORTRAIT_IMAGE_FILE: 'comic portrait image file',
    COMIC_DATA_LANDSCAPE_IMAGE_FILE: 'comic landscape image file',
    LAYOUT_LANDSCAPE_IMAGE_COUNT: 'layout landscape image count',
    LAYOUT_PORTRAIT_IMAGE_COUNT: 'layout portrait image count'
} as const
export const FILE_VALIDATION_TYPE = z.enum(FILE_VALIDATION)
type FILE_VALIDATION_TYPE = z.infer<typeof FILE_VALIDATION_TYPE>;


export const ErrorMessage = {
    [FILE_VALIDATION.COMIC_DATA_FILE]: 'missing comic.json',
    [FILE_VALIDATION.PANEL_DATA_FILE]: 'missing panel file',
    [FILE_VALIDATION.COMIC_DATA_PORTRAIT_IMAGE_FILE]: 'missing comic portrait image',
    [FILE_VALIDATION.COMIC_DATA_LANDSCAPE_IMAGE_FILE]: 'missing comic landscape image',
    [FILE_VALIDATION.LAYOUT_LANDSCAPE_IMAGE_COUNT]: 'missing panel landscape image',
    [FILE_VALIDATION.LAYOUT_PORTRAIT_IMAGE_COUNT]: 'missing panel portrait image',
}

export const DATA_VALIDATION = {
    COMIC_DATA: 'comic data',
    PAGE_DATA: 'page data',
    PANEL_DATA: 'panel data'
} as const
export const DATA_VALIDATION_TYPE = z.enum(DATA_VALIDATION)
type DATA_VALIDATION_TYPE = z.infer<typeof DATA_VALIDATION_TYPE>;


export const VALIDATION = {
    DATA_FILE_ID: 'data file id',
    ...FILE_VALIDATION,
    ...DATA_VALIDATION,
} as const

function getErrorMessage(type: FILE_VALIDATION_TYPE, comicStyle?: ComicStyleType, id?: string) {
    return {
        message: JSON.stringify({
            validation: type,
            comicStyle,
            message: ErrorMessage[type],
            id
        }),
    }
}

function getFileErrorInfo(file: FileType) {
    return {
        id: file.id,
        path: file.path,
    }
}

function validateDataFileId(file: FileType) {
    const {error} = DataId.safeParse(file.id)
    if (error) {
        throw {
            ...getFileErrorInfo(file),
            validation: VALIDATION.DATA_FILE_ID,
            message: error.message
        }
    }
}

const DATA_PARSER = {
    [VALIDATION.COMIC_DATA]: {
        validator: validateComicData,
        info: ComicInfo,
        id: ComicId,
    },
    [VALIDATION.PAGE_DATA]: {
        validator: validatePageData,
        info: PageInfo,
        id: PageId,
    },
    [VALIDATION.PANEL_DATA]: {
        validator: validatePanelData,
        info: PanelInfo,
        id: PanelId,
    }
}

function validateData(file: DataFileType, validation: DATA_VALIDATION_TYPE) {
    const {error} = DATA_PARSER[validation].info.safeParse(file.data)

    if (error) {
        throw {
            ...getFileErrorInfo(file),
            validation,
            message: error.message
        }
    }
}

function validateComicData(file: DataFileType) {
    validateData(file, VALIDATION.COMIC_DATA)
}

function validatePageData(file: DataFileType) {
    validateData(file, VALIDATION.PAGE_DATA)
}

function validatePanelData(file: DataFileType) {
    validateData(file, VALIDATION.PANEL_DATA)
}

function validateDataFileContent(file: DataFileType) {
    validateDataFileId(file)

    Object.values(DATA_PARSER).forEach(({validator, id}) => {
        if (id.safeParse(file.id).success) {
            validator(file)
        }
    })
}


function validateLayout(pageInfo: PageInfo, contentIndex: ContentIndex, style: ComicStyleType) {
    const isOfStyle = (image: ImageFileType) => image.style === style
    const isForPage = (file: ImageFileType | DataFileType) => file.id.startsWith(pageInfo.id)

    if (pageInfo.layout === PageLayout.Hero) {
        if (getLandscapeImages(contentIndex).filter(isOfStyle).filter(isForPage).length < 1) {
            throw getErrorMessage(FILE_VALIDATION.LAYOUT_LANDSCAPE_IMAGE_COUNT, style, pageInfo.id)
        }

        if (getPortraitImages(contentIndex).filter(isOfStyle).filter(isForPage).length < 1) {
            throw getErrorMessage(FILE_VALIDATION.LAYOUT_PORTRAIT_IMAGE_COUNT, style, pageInfo.id)
        }

        if (getPanelFiles(contentIndex).filter(isForPage).length < 1) {
            throw getErrorMessage(FILE_VALIDATION.PANEL_DATA_FILE, undefined, pageInfo.id)
        }
    }

    if (pageInfo.layout === PageLayout.VerticalDiptych || pageInfo.layout === PageLayout.LandscapeDiptych) {
        if (getLandscapeImages(contentIndex).filter(isOfStyle).filter(isForPage).length < 2) {
            throw getErrorMessage(FILE_VALIDATION.LAYOUT_LANDSCAPE_IMAGE_COUNT, style, pageInfo.id)
        }

        if (getPortraitImages(contentIndex).filter(isOfStyle).filter(isForPage).length < 2) {
            throw getErrorMessage(FILE_VALIDATION.LAYOUT_PORTRAIT_IMAGE_COUNT, style, pageInfo.id)
        }

        if (getPanelFiles(contentIndex).filter(isForPage).length < 2) {
            throw getErrorMessage(FILE_VALIDATION.PANEL_DATA_FILE, undefined, pageInfo.id)
        }
    }

    if (pageInfo.layout === PageLayout.Quad) {
        if (getLandscapeImages(contentIndex).filter(isOfStyle).filter(isForPage).length < 4) {
            throw getErrorMessage(FILE_VALIDATION.LAYOUT_LANDSCAPE_IMAGE_COUNT, style, pageInfo.id)
        }

        if (getPortraitImages(contentIndex).filter(isOfStyle).filter(isForPage).length < 4) {
            throw getErrorMessage(FILE_VALIDATION.LAYOUT_PORTRAIT_IMAGE_COUNT, style, pageInfo.id)
        }
    }
}

export function getValidatedContentIndex(contentIndex: ContentIndex): ValidatedContentIndex {
    contentIndex.forEach((file) => {
        if (file.type === FileVariant.DATA) {
            validateDataFileContent(file as DataFileType) //TODO fix with ts
        }
    })

    const comicFile = getComicFile(contentIndex)

    if (!comicFile?.data) {
        throw (getErrorMessage(FILE_VALIDATION.COMIC_DATA_FILE, ComicStyle.ANIME))
    }


    comicFile.data.styles.forEach((comicStyle) => {
        if (!hasImageFile(contentIndex, 'comic.p', ImageVariant.PORTRAIT, comicStyle)) {
            throw getErrorMessage(FILE_VALIDATION.COMIC_DATA_PORTRAIT_IMAGE_FILE, comicStyle)
        }

        if (!hasImageFile(contentIndex, 'comic.l', ImageVariant.LANDSCAPE, comicStyle)) {
            throw getErrorMessage(FILE_VALIDATION.COMIC_DATA_LANDSCAPE_IMAGE_FILE, comicStyle)
        }
    })


    getPagesInfo(contentIndex).forEach((pageInfo) => {
        comicFile.data.styles.forEach((style) => {
            validateLayout(pageInfo, contentIndex, style)
        })

    })


    return {
        comicFile: comicFile,
        pages: getPageFiles(contentIndex),
        panels: getPanelFiles(contentIndex),
        images: getValidImages(contentIndex)
    }
}