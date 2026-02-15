import {type Dialog, Language, type Page, PageLayout, type Panel} from "@library/types";

export const PAGE_1_PANEL_1_EN_NARRATION_1 = "NARRATION EN MOCK 1";
export const PAGE_1_PANEL_1_SE_NARRATION_1 = "NARRATION SE MOCK 1";
export const PAGE_1_PANEL_1_MOCK: Panel = {
    id: "1.1.1",
    narration: {[Language.EN]: PAGE_1_PANEL_1_EN_NARRATION_1, [Language.SE]: PAGE_1_PANEL_1_SE_NARRATION_1},
    description: {[Language.EN]: 'PAGE_1_PANEL_1_EN_DESCRIPTION', [Language.SE]: 'PAGE_1_PANEL_1_SE_DESCRIPTION'}
}
export const PAGE_1_MOCK: Page = {
    layout: PageLayout.Hero,
    panels: [
        PAGE_1_PANEL_1_MOCK
    ],
};

export const PAGE_2_PANEL_1_DIALOG_1: Dialog = {
    [Language.EN]: {
        person: "DIALOG PERSON EN MOCK 1",
        text: "DIALOG TEXT EN MOCK 1"
    },
    [Language.SE]: {
        person: "DIALOG PERSON SE MOCK 1",
        text: "DIALOG TEXT SE MOCK 1"
    }
};
export const PAGE_1_PANEL_1_DIALOG_2: Dialog = {
    [Language.EN]: {
        person: "DIALOG PERSON SE MOCK 2",
        text: "DIALOG TEXT SE MOCK 2"
    },
    [Language.SE]: {
        person: "DIALOG PERSON EN MOCK 2",
        text: "DIALOG TEXT EN MOCK 2"
    }
};

export const PAGE_2_PANEL_1_WITH_REFERENCE_MOCK: Panel = {
    id: "1.1.1",
    dialogs: [PAGE_2_PANEL_1_DIALOG_1, PAGE_1_PANEL_1_DIALOG_2],
    description: {[Language.EN]: 'PAGE_2_PANEL_1_EN_DESCRIPTION', [Language.SE]: 'PAGE_2_PANEL_1_SE_DESCRIPTION'},
    reference: {
        image: {
            included: true,
            description: {
                [Language.EN]: "REFERENCE IMAGE EN MOCK 1",
                [Language.SE]: "REFERENCE IMAGE SE MOCK 1"
            },
            link: {
                url: "https://www.example.com/1",
                title: {
                    [Language.EN]: "REFERENCE LINK EN MOCK 1",
                    [Language.SE]: "REFERENCE LINK SE MOCK 1"
                }
            }
        },
        place: {
            coordinates: {
                lat: 59.3293,
                lon: 18.0686
            },
            name: {
                [Language.EN]: "REFERENCE PLACE EN MOCK 1",
                [Language.SE]: "REFERENCE PLACE SE MOCK 1"
            }
        },
        link: {
            url: "https://www.example.com/2",
            title: {
                [Language.EN]: "REFERENCE LINK EN MOCK 2",
                [Language.SE]: "REFERENCE LINK SE MOCK 2"
            }
        },
        description: {
            [Language.EN]: 'REFERENCE DESCRIPTION EN MOCK 3',
            [Language.SE]: 'REFERENCE DESCRIPTION SE MOCK 3'
        },
    }
}
export const PAGE_2_PANEL_2_MOCK: Panel = {
    id: "1.1.2",
    description: {[Language.EN]: 'PAGE_2_PANEL_2_SE_DESCRIPTION', [Language.SE]: 'PAGE_2_PANEL_2_EN_DESCRIPTION'}
}
export const PAGE_2_MOCK: Page = {
    layout: PageLayout.VerticalDiptych,
    panels: [
        PAGE_2_PANEL_1_WITH_REFERENCE_MOCK,
        PAGE_2_PANEL_2_MOCK,
    ],
};

export const PAGE_3_PANEL_1_MOCK: Panel = {
    id: "1.1.1",
    description: {[Language.EN]: 'PAGE_3_PANEL_1_EN_DESCRIPTION', [Language.SE]: 'PAGE_3_PANEL_1_SE_DESCRIPTION'}

}
export const PAGE_3_PANEL_2_MOCK: Panel = {
    id: "1.1.2",
    description: {[Language.EN]: 'PAGE_3_PANEL_2_EN_DESCRIPTION', [Language.SE]: 'PAGE_3_PANEL_2_SE_DESCRIPTION'}

}
export const PAGE_3_PANEL_3_MOCK: Panel = {
    id: "1.1.3",
    description: {[Language.EN]: 'PAGE_3_PANEL_3_EN_DESCRIPTION', [Language.SE]: 'PAGE_3_PANEL_3_EN_DESCRIPTION'}

}

export const PAGE_3_MOCK: Page = {
    layout: PageLayout.LandscapeDiptych,
    panels: [
        PAGE_3_PANEL_1_MOCK,
        PAGE_3_PANEL_2_MOCK,
        PAGE_3_PANEL_3_MOCK,
    ],
};

export const PAGE_4_PANEL_1_MOCK: Panel = {
    id: "1.1.1",
    description: {[Language.EN]: 'PAGE_4_PANEL_1_EN_DESCRIPTION', [Language.SE]: 'PAGE_4_PANEL_1_SE_DESCRIPTION'}

}
export const PAGE_4_PANEL_2_MOCK: Panel = {
    id: "1.1.2",
    description: {[Language.EN]: 'PAGE_4_PANEL_2_EN_DESCRIPTION', [Language.SE]: 'PAGE_4_PANEL_2_SE_DESCRIPTION'}

}
export const PAGE_4_PANEL_3_MOCK: Panel = {
    id: "1.1.3",
    description: {[Language.EN]: 'PAGE_3_PANEL_3_EN_DESCRIPTION', [Language.SE]: 'PAGE_3_PANEL_3_SE_DESCRIPTION'}

}
export const PAGE_4_PANEL_4_MOCK: Panel = {
    id: "1.1.4",
    description: {[Language.EN]: 'PAGE_3_PANEL_4_EN_DESCRIPTION', [Language.SE]: 'PAGE_3_PANEL_4_SE_DESCRIPTION'}

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
