import {error} from "@sveltejs/kit";
import {ComicStyle, type ComicStyleType, type LanguageType, type Page} from "@library/types";
import {getComic} from "$core/getComic";

interface Props {
    params: {
        comic: string;
        lang: LanguageType;
    };
}

interface Data {
    pages: Page[];
    slug: string;
    title: string;
    style: ComicStyleType
    lang: LanguageType;
}

export function load({params: {comic: slug, lang: language}}: Props): Data {
    const comic = getComic(slug)

    if (comic) {
        return {
            lang: language,
            pages: comic.pages,
            title: `${comic.title[language]}`,
            slug,
            style: ComicStyle.ANIME
        };
    }

    error(404, "Not found");
}
