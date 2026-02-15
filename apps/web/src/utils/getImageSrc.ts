import {type ComicStyleType, type ImageVariantType, Key, type PanelId} from "@library/types";
import {getImages} from "$core/getImages";

function getKey(slug: string, id: PanelId, comicStyle: ComicStyleType, imageVariant: ImageVariantType) {
    console.log(`Looking for image with slug: ${slug}, id: ${id}, comicStyle: ${comicStyle}, imageVariant: ${imageVariant}`);
    const imageKey = (key: string) => key.includes(`${slug}/images/${comicStyle}/${id}.${imageVariant}`);
  

    return Key.parse(Object.keys(getImages()).find(imageKey));
}

export function getImageSrc(slug: string, id: PanelId, comicStyle: ComicStyleType, imageVariant: ImageVariantType): string {
    return getImages()[getKey(slug, id, comicStyle, imageVariant)].default;
}