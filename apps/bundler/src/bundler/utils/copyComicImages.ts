import {copyFile} from "../../files/copy.ts";
import {IMAGE_EXTENSION, OUTPUT_FOLDER} from "../../constants.ts";
import {type ComicStyleType, type Website} from "@library/types";

function getFileName(id: string, variant: string): string {
    return `${id}.${variant}${IMAGE_EXTENSION}`;
}

function getVariantFilenames(panelId: string, hasIncludedImage: boolean): string[] {
    const variants = hasIncludedImage ? ['l', 'p', 'r'] : ['l', 'p'];
    return variants.map((variant) => getFileName(panelId, variant));
}

function copyImagesForStyle(styles: ComicStyleType[], comicsFolder: string, wwwFolder: string, slug: string, id: string, hasIncludedImage: boolean): void {
    styles.forEach((style) => {
        getVariantFilenames(id, hasIncludedImage).forEach((fileName) => {
            copyFile(
                `${comicsFolder}/${slug}/${OUTPUT_FOLDER}/panels/${style}/${fileName}`,
                `${wwwFolder}/${slug}/images/${style}`,
            );
        })
    })
}

export function copyComicImages(comicsFolder: string, wwwFolder: string, website: Website): void {
    website.forEach(({slug, pages, styles, cover}) => {
        copyImagesForStyle(styles, comicsFolder, wwwFolder, slug, 'comic', Boolean(cover?.reference?.image?.included));
        pages.forEach(({panels}) => {
            panels.forEach(({id: panelId, reference}) => {
                copyImagesForStyle(styles, comicsFolder, wwwFolder, slug, panelId, Boolean(reference?.image?.included));
            });
        });
    });
}

