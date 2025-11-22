import {type Dialog, Language, type Page, PageLayout, type Panel} from "@library/types";

export const PAGE_1_PANEL_1_NARRATION_1 = "NARRATION MOCK 1";
export const PAGE_1_PANEL_1_MOCK: Panel = {
    id: "1.1.1",
    narration: {[Language.EN]: PAGE_1_PANEL_1_NARRATION_1},
    description: {[Language.EN]: 'PAGE_1_PANEL_1_DESCRIPTION'}
}
export const PAGE_1_MOCK: Page = {
    layout: PageLayout.Hero,
    panels: [
        PAGE_1_PANEL_1_MOCK
    ],
};

export const PAGE_2_PANEL_1_DIALOG_1: Dialog = {
    [Language.EN]: {
        person: "DIALOG PERSON MOCK 1",
        text: "DIALOG TEXT MOCK 1"
    }
};
export const PAGE_1_PANEL_1_DIALOG_2: Dialog = {
    [Language.EN]: {
        person: "DIALOG PERSON MOCK 2",
        text: "DIALOG TEXT MOCK 2"
    }
};

export const PAGE_2_PANEL_1_MOCK: Panel = {
    id: "1.1.1",
    dialogs: [PAGE_2_PANEL_1_DIALOG_1, PAGE_1_PANEL_1_DIALOG_2],
    description: {[Language.EN]: 'PAGE_2_PANEL_1_DESCRIPTION'}
}
export const PAGE_2_PANEL_2_MOCK: Panel = {
    id: "1.1.2",
    description: {[Language.EN]: 'PAGE_2_PANEL_2_DESCRIPTION'}
}
export const PAGE_2_MOCK: Page = {
    layout: PageLayout.SplitWide,
    panels: [
        PAGE_2_PANEL_1_MOCK,
        PAGE_2_PANEL_2_MOCK,
    ],
};

export const PAGE_3_PANEL_1_MOCK: Panel = {
    id: "1.1.1",
    description: {[Language.EN]: 'PAGE_3_PANEL_1_DESCRIPTION'}

}
export const PAGE_3_PANEL_2_MOCK: Panel = {
    id: "1.1.2",
    description: {[Language.EN]: 'PAGE_3_PANEL_2_DESCRIPTION'}

}
export const PAGE_3_PANEL_3_MOCK: Panel = {
    id: "1.1.3",
    description: {[Language.EN]: 'PAGE_3_PANEL_3_DESCRIPTION'}

}

export const PAGE_3_MOCK: Page = {
    layout: PageLayout.HorizontalTriptych,
    panels: [
        PAGE_3_PANEL_1_MOCK,
        PAGE_3_PANEL_2_MOCK,
        PAGE_3_PANEL_3_MOCK,
    ],
};

export const PAGE_4_PANEL_1_MOCK: Panel = {
    id: "1.1.1",
    description: {[Language.EN]: 'PAGE_4_PANEL_1_DESCRIPTION'}

}
export const PAGE_4_PANEL_2_MOCK: Panel = {
    id: "1.1.2",
    description: {[Language.EN]: 'PAGE_4_PANEL_2_DESCRIPTION'}

}
export const PAGE_4_PANEL_3_MOCK: Panel = {
    id: "1.1.3",
    description: {[Language.EN]: 'PAGE_3_PANEL_3_DESCRIPTION'}

}
export const PAGE_4_PANEL_4_MOCK: Panel = {
    id: "1.1.4",
    description: {[Language.EN]: 'PAGE_3_PANEL_4_DESCRIPTION'}

}

export const PAGE_4_MOCK: Page = {
    layout: PageLayout.Quad,
    panels: [
        PAGE_4_PANEL_1_MOCK,
        PAGE_4_PANEL_2_MOCK,
        PAGE_4_PANEL_3_MOCK,
        PAGE_4_PANEL_4_MOCK,
    ],
};
