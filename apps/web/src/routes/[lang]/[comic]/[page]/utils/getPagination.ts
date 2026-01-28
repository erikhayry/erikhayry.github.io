import {getPagesLength} from "./getPagesLength";

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

const BACK_TO_ROOT_LINK = {
    title: "Back",
    href: "/",
};

function getTitle(pageNumber: number) {
    return `Page ${pageNumber}`;
}

function getBackLink(slug: string, language: string, pageIndex: number) {
    if (pageIndex === 0) {
        return BACK_TO_ROOT_LINK;
    }
    return {
        title: getTitle(pageIndex),
        href: getResolvedHref(slug, language, `${pageIndex - 1}`),
    };
}

function getForwardLink(slug: string, language: string, pageIndex: number) {
    if (pageIndex === getPagesLength(slug) - 1) {
        return BACK_TO_ROOT_LINK;
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
