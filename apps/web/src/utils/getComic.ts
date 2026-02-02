import {getComics} from "$core/getComics";
import {Comic, type Comic as ComicType} from "@library/types";

export function getComic(comicSlug: string): ComicType | undefined {
    const bySlug = (comic: ComicType) => comic.slug === comicSlug;

    const comic = getComics().find(bySlug);

    if (Comic.safeParse(comic).success) {
        return comic;
    }

    return undefined;
}
