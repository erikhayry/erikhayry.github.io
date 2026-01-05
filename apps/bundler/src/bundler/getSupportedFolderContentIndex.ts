import z from "zod";
import {getFolderTree} from "../files/getFolderTree.ts";
import {getPaths} from "../files/getPaths.ts";
import {DATA_EXTENSION, IMAGE_EXTENSION} from "../constants.ts";
import * as Path from "node:path";
import {getJSON} from "../files/getJSON.ts";
import {getImage, type ImageVariantType} from "../files/getImage.ts";
import {ComicStyleType, type PageInfo, type PanelInfo, UNSUPPORTED, type UnsupportedType} from "@library/types";

export const FileVariant = {
    IMAGE: IMAGE_EXTENSION,
    DATA: DATA_EXTENSION,
}
export type FileVariantType = z.infer<typeof FileVariant>;


export const DataVariant = {
    PAGE: 'PAGE',
    PANEL: 'PANEL',
    COMIC: 'COMIC'
} as const
export type DataVariantType = z.infer<typeof DataVariant>;


interface FileInfo {
    path: string,
    id: string,
    type: string
    dir: string
}

export interface ImageFileType {
    path: string,
    id: string,
    type: FileVariantType,
    variant: ImageVariantType,
    width: number,
    height: number,
    style: ComicStyleType | UnsupportedType
}

export interface DataFileType {
    path: string,
    id: string,
    type: DataVariantType,
    data: Record<string, unknown>
}

export interface PageDataFileType extends DataFileType {
    data: PageInfo
}

export interface PanelDataFileType extends DataFileType {
    data: PanelInfo
}

export type FileType = ImageFileType | DataFileType;
export type ContentIndex = FileType[]


function toFile(filePath: string): FileInfo {
    return {
        path: filePath,
        id: Path.basename(filePath).replace(Path.extname(filePath), ''),
        type: Path.extname(filePath),
        dir: Path.dirname(filePath)
    }
}


function getStyle(dir: string): ImageFileType['style'] {
    const folder = dir.split("/").pop()
    const comicStyle = ComicStyleType.safeParse(folder)

    if (comicStyle.success) {
        return comicStyle.data
    }

    return UNSUPPORTED
}


function toFileType(fileInfo: FileInfo): FileType | undefined {
    if (fileInfo.type === FileVariant.DATA) {
        return {
            path: fileInfo.path,
            id: fileInfo.id,
            type: fileInfo.type,
            data: getJSON(fileInfo.path),
        }
    }

    if (fileInfo.type === FileVariant.IMAGE) {
        return {
            path: fileInfo.path,
            id: fileInfo.id,
            type: fileInfo.type,
            ...getImage(fileInfo.path),
            style: getStyle(fileInfo.dir)
        }
    }

    return undefined
}

function outUnsupportedFileFormats(fileType: FileType | undefined): fileType is FileType {
    return Boolean(fileType)
}

export function getSupportedFolderContentIndex(dir: string): ContentIndex {
    return getFolderTree(dir)
        .map(getPaths)
        .flat()
        .map(toFile)
        .map(toFileType)
        .filter(outUnsupportedFileFormats)
}