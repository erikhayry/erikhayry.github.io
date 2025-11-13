import {getComics} from "$core/getComics";
import {Comic, type Comic as ComicType} from "@library/types";


export function getComic(comicSlug: string): ComicType {
    const bySlug = (comic: ComicType) => comic.slug === comicSlug

    return Comic.parse(getComics().find(bySlug))
}