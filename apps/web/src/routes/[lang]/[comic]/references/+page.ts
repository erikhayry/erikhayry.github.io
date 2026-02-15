import {error} from "@sveltejs/kit";
import {
    ComicStyle,
    type ComicStyleType,
    type LanguageType,
    type PanelInfo,
    PanelInfoWithReference,
    type Text
} from "@library/types";
import {getComic} from "$core/getComic";

interface Props {
    params: {
        comic: string;
        lang: LanguageType;
    };
}

interface IndexedPanelInfoWithReference {
    panel: PanelInfoWithReference;
    index: number;
}

interface Data {
    indexedPanelsInfoWithReference: IndexedPanelInfoWithReference[];
    slug: string;
    style: ComicStyleType;
    title: Text;
}


function isPanelInfoWithReference(indexedPanelInfo: {
    panel: PanelInfo;
    index: number;
}): indexedPanelInfo is IndexedPanelInfoWithReference {
    return PanelInfoWithReference.safeParse(indexedPanelInfo.panel).success;
}

export function load({params: {comic: slug}}: Props): Data {
    const comic = getComic(slug)

    if (comic) {
        return {
            title: comic.title,
            slug,
            style: ComicStyle.ANIME,
            indexedPanelsInfoWithReference: comic.pages.flatMap(page => page.panels).map((panel, index) => ({
                panel,
                index: index + 1
            })).filter(isPanelInfoWithReference)
        };
    }

    error(404, "Not found");
}
