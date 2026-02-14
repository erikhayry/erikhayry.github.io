import {error} from "@sveltejs/kit";
import {ComicStyle, type ComicStyleType, type LanguageType, type PanelInfo} from "@library/types";
import {getComic} from "$core/getComic";

interface Props {
    params: {
        comic: string;
        lang: LanguageType;
    };
}

interface Data {
    panels: PanelInfo[];
    slug: string;
    style: ComicStyleType;
}


export function load({params: {comic: slug}}: Props): Data {
    const comic = getComic(slug)


    if (comic) {


        return {
            slug,
            style: ComicStyle.ANIME,
            panels: comic.pages.map(page => page.panels).flat().filter(panel => panel.reference !== undefined)
        };
    }

    error(404, "Not found");
}
