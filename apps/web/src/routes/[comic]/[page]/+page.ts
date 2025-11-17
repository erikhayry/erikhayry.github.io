import { error } from "@sveltejs/kit";
import { getPage } from "./utils/getPage";
import type { Page } from "@library/types";
import { getPagination, type Pagination } from "./utils/getPagination";

export const load = ({
  params: { comic: slug, page: pageIndex },
}: {
  params: { comic: string; page: string };
}): {
  page: Page;
  slug: string;
  title: string;
  pagination: Pagination;
} => {
  const page = getPage(slug, parseInt(pageIndex));

  if (page) {
    return {
      title: `${slug} | ${parseInt(pageIndex) + 1}`,
      page,
      slug,
      pagination: getPagination(slug, Number.parseInt(pageIndex)),
    };
  }

  error(404, "Not found");
};
