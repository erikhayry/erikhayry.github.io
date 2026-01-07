import {IMAGE_EXTENSION} from "../constants.ts";
import {ComicStyleType} from "@library/types";

export function getImageName(panelId: string, comicStyle: ComicStyleType) {
    return `${panelId}.${comicStyle}${IMAGE_EXTENSION}`
}