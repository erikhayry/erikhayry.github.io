import {copyFile} from "./copy.ts";
import {IMAGE_EXTENSION, OUTPUT_FOLDER} from "../constants.ts";
import {getWebsiteFile} from "../bundler/getWebsiteFile.ts";

export function copyComicImages(comicsFolder: string, wwwFolder: string): void {
    getWebsiteFile(comicsFolder).forEach(({slug, pages}) => {
        pages.forEach(({panels}) => {
            panels.forEach(({id}) => {
                copyFile(
                    `${comicsFolder}/${slug}/${OUTPUT_FOLDER}/${id}${IMAGE_EXTENSION}`,
                    `${wwwFolder}/${slug}`,
                );
            });
        });
    });
}
