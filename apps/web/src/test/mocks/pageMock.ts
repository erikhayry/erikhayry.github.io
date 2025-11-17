import {type Page, PageLayout} from "@library/types";


export const PAGE_1_PANEL_1_NARRATION_1 = 'NARRATION MOCK 1'
export const PAGE_1_PANEL_1_NARRATION_2 = 'NARRATION MOCK 2'
export const PAGE_1_PANEL_1_NARRATIONS = [PAGE_1_PANEL_1_NARRATION_1, PAGE_1_PANEL_1_NARRATION_2]
export const PAGE_1_MOCK: Page = {
    "layout": PageLayout.Hero,
    "panels": [
        {
            "id": "1.1.1",
            "narrations": PAGE_1_PANEL_1_NARRATIONS
        }
    ]
}

export const PAGE_2_MOCK: Page = {
    "layout": PageLayout.SplitWide,
    "panels": [
        {
            "id": "1.1.1",
        }, {
            "id": "1.1.2"
        }
    ]
}

export const PAGE_3_MOCK: Page = {
    "layout": PageLayout.HorizontalTriptych,
    "panels": [
        {
            "id": "1.1.1",
        }, {
            "id": "1.1.2"
        }, {
            "id": "1.1.3"
        }
    ]
}

export const PAGE_4_MOCK: Page = {
    "layout": PageLayout.Quad,
    "panels": [
        {
            "id": "1.1.1",
        }, {
            "id": "1.1.2"
        },
        {
            "id": "1.1.3"
        },
        {
            "id": "1.1.4"
        }
    ]
}