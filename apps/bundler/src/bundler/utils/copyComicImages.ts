import {copyFile} from "../../files/copy.ts";
import {IMAGE_EXTENSION, OUTPUT_FOLDER} from "../../constants.ts";
import {type Website} from "@library/types";

export function copyComicImages(comicsFolder: string, wwwFolder: string, website: Website): void {
    website.forEach(({slug, pages, styles}) => {
        pages.forEach(({panels}) => {
            panels.forEach(({id}) => {
                styles.forEach((style) => {
                    copyFile(
                        `${comicsFolder}/${slug}/${OUTPUT_FOLDER}/panels/${style}/comic.p${IMAGE_EXTENSION}`,
                        `${wwwFolder}/${slug}/images/${style}`,
                    );
                    copyFile(
                        `${comicsFolder}/${slug}/${OUTPUT_FOLDER}/panels/${style}/comic.l${IMAGE_EXTENSION}`,
                        `${wwwFolder}/${slug}/images/${style}`,
                    );
                    copyFile(
                        `${comicsFolder}/${slug}/${OUTPUT_FOLDER}/panels/${style}/${id}.l${IMAGE_EXTENSION}`,
                        `${wwwFolder}/${slug}/images/${style}`,
                    );
                    copyFile(
                        `${comicsFolder}/${slug}/${OUTPUT_FOLDER}/panels/${style}/${id}.p${IMAGE_EXTENSION}`,
                        `${wwwFolder}/${slug}/images/${style}`,
                    );
                })

            });
        });
    });
}

