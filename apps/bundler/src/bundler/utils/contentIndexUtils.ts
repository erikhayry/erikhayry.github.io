import {ComicInfo, type ComicStyleType, PageInfo, PanelInfo} from "@library/types";
import {
    type ContentIndex,
    type DataFileType,
    type FileType,
    FileVariant,
    type ImageFileType,
    type PageDataFileType,
    type PanelDataFileType
} from "../getSupportedFolderContentIndex.ts";
import {ImageVariant, type ImageVariantType} from "../../files/getImage.ts";

export function isDataFile(file: FileType): file is DataFileType {
    return file.type === FileVariant.DATA
}

export function getComicFile(contentIndex: ContentIndex): DataFileType | undefined {
    return contentIndex.filter(isDataFile).find((file) => file.id === 'comic')
}

export function getComicInfo(contentIndex: ContentIndex): ComicInfo | undefined {
    const file = getComicFile(contentIndex)

    if (file) {
        return ComicInfo.safeParse(file.data).data
    }

    return undefined
}

export function isPageInfo(file: DataFileType): file is PageDataFileType {
    return PageInfo.safeParse(file.data).success
}

export function getPagesInfo(contentIndex: ContentIndex): PageInfo[] {
    return contentIndex.filter(isDataFile).filter(isPageInfo).map(({data}) => data)
}

export function isImage(file: FileType): file is ImageFileType {
    return file.type === FileVariant.IMAGE
}

export function hasImageFile(contentIndex: ContentIndex, id: string, variant: ImageVariantType, comicStyle: ComicStyleType) {
    return getImages(contentIndex).some((file) =>
        file.type === FileVariant.IMAGE &&
        file.id === id &&
        file.variant === variant &&
        file.style === comicStyle
    )
}

export function getImages(contentIndex: ContentIndex) {
    return contentIndex.filter(isImage)
}

export function getDataFiles(contentIndex: ContentIndex) {
    return contentIndex.filter(isDataFile)
}

function isPanelInfo(file: DataFileType): file is PanelDataFileType {
    return PanelInfo.safeParse(file.data).success
}

export function getPanelFiles(contentIndex: ContentIndex) {
    return getDataFiles(contentIndex).filter(isPanelInfo)
}

export function getPanelsInfo(contentIndex: ContentIndex): PanelInfo[] {
    return getPanelFiles(contentIndex).map(({data}) => data)
}


export function getLandscapeImages(contentIndex: ContentIndex) {
    return getImages(contentIndex).filter((image) => image.variant === ImageVariant.LANDSCAPE)
}

export function getPortraitImages(contentIndex: ContentIndex) {
    return getImages(contentIndex).filter((image) => image.variant === ImageVariant.PORTRAIT)
}