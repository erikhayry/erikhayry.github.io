import {Key, type PanelId} from "@library/types";
import {getImages} from "$core/getImages";

function getKey(slug: string, id: PanelId) {
    const imageKey = (key: string) => key.includes(`${slug}/${id}`)

    return Key.parse(Object.keys(getImages()).find(imageKey))
}

export function getSrc(slug: string, id: PanelId): string {
    console.log(slug, id)
    return getImages()[getKey(slug, id)].default
}