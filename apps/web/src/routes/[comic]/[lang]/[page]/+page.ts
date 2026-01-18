import {error} from "@sveltejs/kit";
import {getPage} from "./utils/getPage";
import {ComicStyle, type ComicStyleType, type Page} from "@library/types";
import {getPagination, type Pagination} from "./utils/getPagination";
import {getComic} from "$core/getComic";
import {I18N} from "../../../../i18n/i18n";

export const load = ({
                         params: {comic: slug, lang: language, page: pageIndex},
                     }: {
    params: { comic: string; lang: keyof I18N, page: string };
}): {
    page: Page;
    slug: string;
    title: string;
    pagination: Pagination;
    style: ComicStyleType
} => {
    const page = getPage(slug, parseInt(pageIndex));
    const comic = getComic(slug)

    if (page) {
        return {
            title: `${comic.title[language]} | ${parseInt(pageIndex) + 1}`,
            page,
            slug,
            pagination: getPagination(slug, language, Number.parseInt(pageIndex)),
            style: ComicStyle.ANIME
        };
    }

    error(404, "Not found");
};
