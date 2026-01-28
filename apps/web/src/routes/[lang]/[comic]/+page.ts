import {error} from "@sveltejs/kit";
import {type Comic} from "@library/types";
import {getComic} from "$core/getComic";

interface Props {
    params: {
        comic: string;
        lang: string;
    };
}

interface Data {
    comic: Comic;
    lang: string;
}

export function load({params: {comic: slug, lang}}: Props): Data {
    const comic = getComic(slug)

    if (comic) {
        return {
            comic,
            lang
        };
    }


    error(404, "Not found");
}
