import {type ComicStyleType, PageInfo, PanelInfo} from "@library/types";
import {
    type ComicDataFileType,
    type ContentIndex,
    type DataFileType,
    type FileType,
    FileVariant,
    type ImageFileType,
    type PageDataFileType,
    type PanelDataFileType,
    type ValidImageFileType
} from "../getSupportedFolderContentIndex.ts";
import {ImageVariant, type ImageVariantType} from "../../files/getImage.ts";

export function isDataFile(file: FileType): file is DataFileType {
    return file.type === FileVariant.DATA
}

export function isComicDataFile(file: DataFileType): file is ComicDataFileType {
    return file.id === 'comic'
}

export function getComicFile(contentIndex: ContentIndex): ComicDataFileType | undefined {
    return contentIndex.filter(isDataFile).find(isComicDataFile)
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

export function isValidImage(file: ImageFileType): file is ValidImageFileType {
    return file.variant === ImageVariant.PORTRAIT || file.variant === ImageVariant.LANDSCAPE
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

export function getValidImages(contentIndex: ContentIndex): ValidImageFileType[] {
    return getImages(contentIndex).filter(isValidImage)
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

export function getPageFiles(contentIndex: ContentIndex) {
    return getDataFiles(contentIndex).filter(isPageInfo)
}

export function getLandscapeImages(contentIndex: ContentIndex) {
    return getImages(contentIndex).filter((image) => image.variant === ImageVariant.LANDSCAPE)
}

export function getPortraitImages(contentIndex: ContentIndex) {
    return getImages(contentIndex).filter((image) => image.variant === ImageVariant.PORTRAIT)
}