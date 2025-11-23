import {copyFile} from "../../files/copy.ts";
import {COMIC_STYLE_EXTENSION, IMAGE_EXTENSION, OUTPUT_FOLDER} from "../../constants.ts";
import {getWebsiteFile} from "../getWebsiteFile.ts";

export function copyComicImages(comicsFolder: string, wwwFolder: string): void {
    getWebsiteFile(comicsFolder).forEach(({slug, pages}) => {
        pages.forEach(({panels}) => {
            panels.forEach(({id}) => {
                copyFile(
                    `${comicsFolder}/${slug}/${OUTPUT_FOLDER}/${id}${COMIC_STYLE_EXTENSION}${IMAGE_EXTENSION}`,
                    `${wwwFolder}/${slug}`,
                );
            });
        });
    });
}
