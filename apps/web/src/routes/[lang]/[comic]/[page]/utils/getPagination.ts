import {getPagesLength} from "./getPagesLength";
import {i18n} from "../../../../../i18n/i18n";
import {TEXT} from "../../../../../i18n/ui";

interface PaginationLink {
    href: string;
    title: string;
}

export interface Pagination {
    back: PaginationLink;
    forward: PaginationLink;
}

function getResolvedHref(comic: string, language: string, page: string) {
    return `/` + [language, comic, page].map(encodeURIComponent).join(`/`);
}

export const BACK_TO_ROOT_LINK = {
    title: i18n(TEXT.paginationBack),
};

function getTitle(pageNumber: number) {
    return `${i18n(TEXT.paginationForward)} ${pageNumber}`;
}

function getComicUrl(slug: string, language: string) {
    return {
        href: `/${language}/${slug}`,
        title: BACK_TO_ROOT_LINK.title,
    };
}

function getBackLink(slug: string, language: string, pageIndex: number) {
    if (pageIndex === 0) {
        return getComicUrl(slug, language);
    }
    return {
        title: getTitle(pageIndex),
        href: getResolvedHref(slug, language, `${pageIndex - 1}`),
    };
}

function getForwardLink(slug: string, language: string, pageIndex: number) {
    if (pageIndex === getPagesLength(slug) - 1) {
        return getComicUrl(slug, language);
    }

    return {
        title: getTitle(pageIndex + 2),
        href: getResolvedHref(slug, language, `${pageIndex + 1}`),
    };
}

export function getPagination(slug: string, language: string, pageIndex: number): Pagination {
    return {
        back: getBackLink(slug, language, pageIndex),
        forward: getForwardLink(slug, language, pageIndex),
    };
}
