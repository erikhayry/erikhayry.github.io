import {PageLayout, type PageLayoutValue} from "@library/types";

export function getLayoutClassName(layout: PageLayoutValue) {
    switch (layout) {
        case PageLayout.Hero:
            return {
                page: "layout-1",
                panel: ["panel-a"],
            };
        case PageLayout.VerticalDiptych:
            return {
                page: "layout-2",
                panel: ["panel-a", "panel-b"],
            };
        case PageLayout.LandscapeDiptych:
            return {
                page: "layout-3",
                panel: ["panel-a", "panel-b"],
            };
        case PageLayout.Quad:
            return {
                page: "layout-4",
                panel: ["panel-a", "panel-b", "panel-c", "panel-d"],
            };
    }
}
