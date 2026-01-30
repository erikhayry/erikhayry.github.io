import {
    type ComicDataFileType,
    type ContentIndex,
    type DataFileType,
    type FileType,
    FileVariant,
    type ImageFileType,
    type ValidImageFileType
} from "../getSupportedFolderContentIndex.ts";
import {ImageVariant} from "../../files/getImage.ts";

export function isDataFile(file: FileType): file is DataFileType {
    return file.type === FileVariant.DATA
}

export function isComicDataFile(file: DataFileType): file is ComicDataFileType {
    return file.id === 'comic'
}

export function getComicFile(contentIndex: ContentIndex): ComicDataFileType | undefined {
    return contentIndex.filter(isDataFile).find(isComicDataFile)
}

export function isImage(file: FileType): file is ImageFileType {
    return file.type === FileVariant.IMAGE
}

export function isValidImage(file: ImageFileType): file is ValidImageFileType {
    return file.variant === ImageVariant.PORTRAIT || file.variant === ImageVariant.LANDSCAPE
}


export function getImages(contentIndex: ContentIndex) {
    return contentIndex.filter(isImage)
}

export function getValidImages(contentIndex: ContentIndex): ValidImageFileType[] {
    return getImages(contentIndex).filter(isValidImage)
}

