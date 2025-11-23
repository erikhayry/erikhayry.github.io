import {
    type Comic,
    type ComicOutput,
    type Page,
    type PageOutput,
    Panel,
    type Panel as PanelType,
    PanelInfo,
    Website,
} from "@library/types";
import {getComicOutput} from "./getComicOutput.ts";

function getComicFolder(path: string): string {
    const folders = path.split("/");

    return folders[folders.length - 1] || "";
}

function toPanel(panelOutput: PanelInfo): PanelType {
    return Panel.parse(panelOutput);
}

function toPages({panels, layout}: PageOutput): Page {
    return {
        layout,
        panels: panels.map(toPanel),
    };
}

function toComic({path: filePath, pages, styles}: ComicOutput): Comic {
    return {
        slug: getComicFolder(filePath),
        pages: pages.map(toPages),
        styles,
    };
}

export function getWebsiteFile(folderPath: string): Website {
    return getComicOutput(folderPath).map(toComic);
}
