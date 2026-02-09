import {error} from "@sveltejs/kit";
import {getPage} from "./utils/getPage";
import {ComicStyle, type ComicStyleType, type LanguageType, type Page} from "@library/types";
import {getPagination, type Pagination} from "./utils/getPagination";
import {getComic} from "$core/getComic";

interface Props {
    params: {
        comic: string;
        lang: LanguageType;
        page: string;
    };
}

interface Data {
    page: Page;
    slug: string;
    title: string;
    pagination: Pagination;
    style: ComicStyleType
    pageNumber: string
    language: LanguageType
}

export function load({params: {comic: slug, lang: language, page: pageIndex}}: Props): Data {
    const page = getPage(slug, Number.parseInt(pageIndex));
    const comic = getComic(slug)

    if (comic && page) {
        return {
            title: `${comic.title[language]} | ${Number.parseInt(pageIndex) + 1}`,
            page,
            slug,
            pagination: getPagination(slug, language, Number.parseInt(pageIndex)),
            style: ComicStyle.ANIME,
            pageNumber: pageIndex,
            language,
        };
    }

    error(404, "Not found");
}
