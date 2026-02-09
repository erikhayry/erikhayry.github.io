import {error} from "@sveltejs/kit";
import {type LanguageType, type Panel} from "@library/types";
import {getComic} from "$core/getComic";
import {getPage} from "../../utils/getPage";

interface Props {
    params: {
        comic: string;
        lang: LanguageType;
        page: string;
        panel: string;
    };
}

interface Data {
    title: string;
    panel: Panel;
}

export function load({params: {comic: slug, lang: language, page: pageIndex, panel: panelIndex}}: Props): Data {
    const comic = getComic(slug)
    const page = getPage(slug, Number.parseInt(pageIndex));
    const panel = page?.panels[Number.parseInt(panelIndex)];

    if (panel.reference && comic) {
        return {
            title: `${comic.title[language]} | ${Number.parseInt(pageIndex) + 1} | ${Number.parseInt(panelIndex) + 1}`,
            panel: page.panels[Number.parseInt(panelIndex)],
        };
    }

    error(404, "Not found");
}
