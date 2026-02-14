import {Language} from "@library/types";
import {i18n} from "../i18n/i18n";
import {TEXT} from "../i18n/ui";
import {getComics} from "$core/getComics";
import {getClipPath} from "./utils/getClipPath";

interface Data {
    titles: string[];
    backgroundImages: {
        slug: string;
        clipPath: string;
    }[];
}

export function load(): Data {
    return {
        titles: Object.values(Language).map((lang) => i18n(TEXT.changeLanguageTitle, lang)),
        backgroundImages: getComics().map(({slug}, index, arr) => {
            return {
                slug,
                clipPath: getClipPath(index, arr.length)
            }
        })
    }
}
