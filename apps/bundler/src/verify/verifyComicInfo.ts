import {ComicInfo} from "@library/types";

export function verifyComicInfo(data: any) {
    return ComicInfo.safeParse(data).success;
}

export function isComicInfoFile(fileName: string) {
    return fileName === 'comic.json'
}