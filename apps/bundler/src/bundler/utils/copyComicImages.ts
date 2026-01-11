import {copyFile} from "../../files/copy.ts";
import {IMAGE_EXTENSION, OUTPUT_FOLDER} from "../../constants.ts";
import {type Website} from "@library/types";

export function copyComicImages(comicsFolder: string, wwwFolder: string, website: Website): void {
    website.forEach(({slug, pages, styles}) => {
        pages.forEach(({panels}) => {
            panels.forEach(({id: panelId}) => {
                styles.forEach((style) => {
                    ['comic', panelId].forEach((image) => {
                        ['l', 'p'].forEach((variant) => {
                            copyFile(
                                `${comicsFolder}/${slug}/${OUTPUT_FOLDER}/panels/${style}/${image}.${variant}${IMAGE_EXTENSION}`,
                                `${wwwFolder}/${slug}/images/${style}`,
                            );
                        })

                    })
                })

            });
        });
    });
}

