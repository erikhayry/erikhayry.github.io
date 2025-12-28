import {
    type ContentIndex,
    type DataFileType,
    type FileType,
    FileVariant,
    type ImageFileType
} from "./getSupportedFolderContentIndex.ts";
import {
    ComicId,
    ComicInfo,
    ComicStyle,
    type ComicStyleType,
    DataId,
    PageId,
    PageInfo,
    PanelId,
    PanelInfo
} from "@library/types";
import {z} from "zod";
import {ImageVariant, type ImageVariantType} from "../files/getImage.ts";


export const FILE_VALIDATION = {
    COMIC_DATA_FILE: 'comic data file',
    COMIC_DATA_PORTRAIT_IMAGE_FILE: 'comic portrait image file',
    COMIC_DATA_LANDSCAPE_IMAGE_FILE: 'comic landscape image file'
} as const
export const FILE_VALIDATION_TYPE = z.enum(FILE_VALIDATION)
type FILE_VALIDATION_TYPE = z.infer<typeof FILE_VALIDATION_TYPE>;

export const ErrorMessage = {
    [FILE_VALIDATION.COMIC_DATA_FILE]: 'missing comic.json',
    [FILE_VALIDATION.COMIC_DATA_PORTRAIT_IMAGE_FILE]: 'missing comic portrait image',
    [FILE_VALIDATION.COMIC_DATA_LANDSCAPE_IMAGE_FILE]: 'missing comic landscape image'
}

export const DATA_VALIDATION = {
    COMIC_DATA: 'comic data',
    PAGE_DATA: 'page data',
    PANEL_DATA: 'panel data'
} as const
export const DATA_VALIDATION_TYPE = z.enum(DATA_VALIDATION)
type DATA_VALIDATION_TYPE = z.infer<typeof DATA_VALIDATION_TYPE>;

export const IMAGE_VALIDATION = {
    LAYOUT_IMAGE_COUNT: 'layout image count'
} as const


export const VALIDATION = {
    DATA_FILE_ID: 'data file id',
    ...FILE_VALIDATION,
    ...IMAGE_VALIDATION,
    ...DATA_VALIDATION,
} as const

function getErrorMessage(type: FILE_VALIDATION_TYPE, comicStyle: ComicStyleType) {
    return {
        validation: type,
        comicStyle,
        message: ErrorMessage[type]
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

function hasDataFile(contentIndex: ContentIndex, id: string) {
    return contentIndex.some((file) => file.type === FileVariant.DATA && file.id === id)
}

function getDataFile(contentIndex: ContentIndex, id: string) {
    return contentIndex.find((file) => file.type === FileVariant.DATA && file.id === id)
}

function isImage(file: FileType): file is ImageFileType {
    return file.type === FileVariant.IMAGE
}

function hasImageFile(contentIndex: ContentIndex, id: string, variant: ImageVariantType, comicStyle: ComicStyleType) {
    return contentIndex.filter(isImage).some((file) =>
        file.type === FileVariant.IMAGE &&
        file.id === id &&
        file.variant === variant &&
        file.style === comicStyle
    )
}

export function validateContentIndex(contentIndex: ContentIndex) {
    contentIndex.forEach((file) => {
        if (file.type === FileVariant.DATA) {
            validateDataFileContent(file as DataFileType) //TODO fix with ts
        }
    })

    if (!hasDataFile(contentIndex, 'comic')) {
        throw (getErrorMessage(FILE_VALIDATION.COMIC_DATA_FILE, ComicStyle.ANIME))
    }

    const comicStyles = ((getDataFile(contentIndex, 'comic') as DataFileType).data as ComicInfo).styles

    comicStyles.forEach((comicStyle) => {
        if (!hasImageFile(contentIndex, 'comic.p', ImageVariant.PORTRAIT, comicStyle)) {
            throw getErrorMessage(FILE_VALIDATION.COMIC_DATA_PORTRAIT_IMAGE_FILE, comicStyle)
        }

        if (!hasImageFile(contentIndex, 'comic.l', ImageVariant.LANDSCAPE, comicStyle)) {
            throw getErrorMessage(FILE_VALIDATION.COMIC_DATA_LANDSCAPE_IMAGE_FILE, comicStyle)
        }
    })


    return true
}