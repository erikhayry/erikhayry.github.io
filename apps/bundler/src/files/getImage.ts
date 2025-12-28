import {readFileSync} from "node:fs";
import {imageSize} from "image-size";
import {z} from "zod";

export const LANDSCAPE_IMAGE = {
    width: 1536,
    height: 1024
}

export const PORTRAIT_IMAGE = {
    width: 1024,
    height: 1536
}

export const ImageVariant = {
    PORTRAIT: 'PORTRAIT',
    LANDSCAPE: 'LANDSCAPE',
    UNSUPPORTED: 'UNSUPPORTED',
} as const
export type ImageVariantType = z.infer<typeof ImageVariant>;


function getVariant(width: number, height: number): ImageVariantType {
    if (width === PORTRAIT_IMAGE.width && height === PORTRAIT_IMAGE.height) {
        return ImageVariant.PORTRAIT
    }

    if (width === LANDSCAPE_IMAGE.width && height === LANDSCAPE_IMAGE.height) {
        return ImageVariant.LANDSCAPE
    }

    return ImageVariant.UNSUPPORTED
}

export function getImage(path: string) {
    const buffer = readFileSync(path)
    const {width, height} = imageSize(buffer)


    return {
        width,
        height,
        variant: getVariant(width, height)
    }
}