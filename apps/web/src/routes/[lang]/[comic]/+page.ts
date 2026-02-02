import {error} from "@sveltejs/kit";
import {type Comic} from "@library/types";
import {getComic} from "$core/getComic";
import {i18n} from "../../../i18n/i18n";
import {TEXT} from "../../../i18n/ui";

interface Props {
    params: {
        comic: string;
        lang: string;
    };
}

interface Data {
    comic: Comic;
    lang: string;
    numberOfPages: string
}

export function load({params}: Props): Data {
    const comic = getComic(params.comic)

    if (comic) {
        return {
            comic,
            lang: params.lang,
            numberOfPages: `${i18n(TEXT.pages)}: ${comic.pages.length}`
        };
    }


    error(404, "Not found");
}
