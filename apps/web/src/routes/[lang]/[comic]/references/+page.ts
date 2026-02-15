import {error} from "@sveltejs/kit";
import {
    ComicStyle,
    type ComicStyleType,
    type LanguageType,
    type PanelInfo,
    PanelInfoWithReference
} from "@library/types";
import {getComic} from "$core/getComic";

interface Props {
    params: {
        comic: string;
        lang: LanguageType;
    };
}

interface Data {
    panels: PanelInfoWithReference[];
    slug: string;
    style: ComicStyleType;
}


function isPanelInfoWithReference(panel: PanelInfo): panel is PanelInfoWithReference {
    return PanelInfoWithReference.safeParse(panel).success;
}

export function load({params: {comic: slug}}: Props): Data {
    const comic = getComic(slug)

    if (comic) {
        return {
            slug,
            style: ComicStyle.ANIME,
            panels: comic.pages.flatMap(page => page.panels).filter(isPanelInfoWithReference)
        };
    }

    error(404, "Not found");
}
