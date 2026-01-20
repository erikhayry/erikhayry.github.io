import {expect, type Page, test} from "@playwright/test";
import type {Comic} from "@library/types";
import {getComics} from "../../src/utils/getComics.ts";
import {getPagination} from "../../src/routes/[comic]/[lang]/[page]/utils/getPagination.ts";
import {CURRENT_LANGUAGE, i18n} from "../../src/i18n/i18n.ts";

async function testComic(comic: Comic, page: Page) {

    await page.getByLabel(i18n(comic.title)).click();

    let testedPage = 0;

    while (testedPage < comic.pages.length) {
        await page
            .getByRole("link", {
                name: getPagination(comic.slug, CURRENT_LANGUAGE, testedPage).forward.title,
                exact: true,
            })
            .click();
        await expect(page).toHaveScreenshot(
            `${comic.slug}/${testedPage.toString()}.png`, {fullPage: true}
        );
        testedPage++;
    }

    await page.goto("/");
}

async function testComics(page: Page) {
    await page.goto("/");
    await expect(page).toHaveScreenshot("comics.png", {fullPage: true});
    const comics = getComics();
    let testedComic = 0;

    while (testedComic < comics.length) {
        await testComic(comics[testedComic]!, page);
        testedComic++;
    }
}

test("comics", async ({page}) => {
    await testComics(page);
});
