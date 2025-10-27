import website from '$lib/assets/website.json' with {type: 'json'};
import type {Website} from "@library/types";

export function getComics(): Website {
    return website
}