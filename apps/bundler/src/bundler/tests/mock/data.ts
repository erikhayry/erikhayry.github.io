import {ComicStyle, PageLayout} from "@library/types";
import {FileVariant} from "../../getSupportedFolderContentIndex.ts";
import {ImageVariant} from "../../../files/getImage.ts";

export const VALID_COMIC_DATA_MOCK = {
    path: 'mocks/comics/output/comic.json',
    type: FileVariant.DATA,
    id: 'comic',
    data: {
        "styles": [
            "AN",
            "BE"
        ]
    }
}

export const BASE_IMAGE = {
    type: FileVariant.IMAGE,
}
export const BASE_LANDSCAPE_IMAGE = {
    ...BASE_IMAGE,
    height: 1536,
    width: 1024,
    variant: ImageVariant.LANDSCAPE,
}
export const BASE_PORTRAIT_IMAGE = {
    ...BASE_IMAGE,
    height: 1024,
    width: 1536,
    variant: ImageVariant.PORTRAIT
    ,
}
export const BASE_AN_LANDSCAPE_IMAGE = {
    ...BASE_LANDSCAPE_IMAGE,
    style: ComicStyle.ANIME
}
export const BASE_AN_PORTRAIT_IMAGE = {
    ...BASE_PORTRAIT_IMAGE,
    style: ComicStyle.ANIME
}
export const BASE_BE_LANDSCAPE_IMAGE = {
    ...BASE_LANDSCAPE_IMAGE,
    style: ComicStyle.BELGIAN_COMIC
}
export const BASE_BE_PORTRAIT_IMAGE = {
    ...BASE_PORTRAIT_IMAGE,
    style: ComicStyle.BELGIAN_COMIC
}

export const VALID_COMIC_AN_LANDSCAPE_IMAGE = {
    ...BASE_AN_LANDSCAPE_IMAGE,
    id: "comic.l",
    path: "mocks/comics/output/panels/AN/comic.l.png",
}
export const VALID_COMIC_AN_PORTRAIT_IMAGE = {
    ...BASE_AN_PORTRAIT_IMAGE,
    id: "comic.p",
    path: "mocks/comics/output/panels/AN/comic.p.png",
}

export const VALID_COMIC_BE_LANDSCAPE_IMAGE = {
    ...BASE_BE_LANDSCAPE_IMAGE,
    id: "comic.l",
    path: "mocks/comics/output/panels/BE/comic.l.png",
}
export const VALID_COMIC_BE_PORTRAIT_IMAGE = {
    ...BASE_BE_PORTRAIT_IMAGE,
    id: "comic.p",
    path: "mocks/comics/output/panels/BE/comic.p.png",
}

export const VALID_PAGE_LAYOUT_1_DATA_MOCK = {
    path: 'mocks/comics/output/1.1.json',
    type: FileVariant.DATA,
    id: '1.1',
    data: {
        "id": "1.1",
        "layout": PageLayout.Hero
    }
}

export const VALID_PAGE_LAYOUT_2_DATA_MOCK = {
    path: 'mocks/comics/output/1.1.json',
    type: FileVariant.DATA,
    id: '1.1',
    data: {
        "id": "1.1",
        "layout": PageLayout.VerticalDiptych
    }
}

export const VALID_PAGE_LAYOUT_3_DATA_MOCK = {
    path: 'mocks/comics/output/1.1.json',
    type: FileVariant.DATA,
    id: '1.1',
    data: {
        "id": "1.1",
        "layout": PageLayout.LandscapeDiptych
    }
}

export const VALID_PAGE_LAYOUT_4_DATA_MOCK = {
    path: 'mocks/comics/output/1.1.json',
    type: FileVariant.DATA,
    id: '1.1',
    data: {
        "id": "1.1",
        "layout": PageLayout.Quad
    }
}

export const VALID_PAGE_AN_LANDSCAPE_IMAGE_1 = {
    ...BASE_AN_LANDSCAPE_IMAGE,
    id: "1.1.1",
    path: "mocks/comics/output/panels/AN/1.1.1.png",

}
export const VALID_PAGE_AN_PORTRAIT_IMAGE_1 = {
    ...BASE_AN_PORTRAIT_IMAGE,
    id: "1.1.1",
    path: "mocks/comics/output/panels/AN/1.1.1.png",
}

export const VALID_PAGE_BE_LANDSCAPE_IMAGE_1 = {
    ...BASE_BE_LANDSCAPE_IMAGE,
    id: "1.1.1",
    path: "mocks/comics/output/panels/BE/1.1.1.png",

}
export const VALID_PAGE_BE_PORTRAIT_IMAGE_1 = {
    ...BASE_BE_PORTRAIT_IMAGE,
    id: "1.1.1",
    path: "mocks/comics/output/panels/BE/1.1.1.png",
}

export const VALID_PAGE_AN_LANDSCAPE_IMAGE_2 = {
    ...BASE_AN_LANDSCAPE_IMAGE,
    id: "1.1.2",
    path: "mocks/comics/output/panels/AN/1.1.2.png",

}
export const VALID_PAGE_AN_PORTRAIT_IMAGE_2 = {
    ...BASE_AN_PORTRAIT_IMAGE,
    id: "1.1.2",
    path: "mocks/comics/output/panels/AN/1.1.2.png",
}

export const VALID_PAGE_BE_LANDSCAPE_IMAGE_2 = {
    ...BASE_BE_LANDSCAPE_IMAGE,
    id: "1.1.2",
    path: "mocks/comics/output/panels/BE/1.1.2.png",

}
export const VALID_PAGE_BE_PORTRAIT_IMAGE_2 = {
    ...BASE_BE_PORTRAIT_IMAGE,
    id: "1.1.2",
    path: "mocks/comics/output/panels/BE/1.1.2.png",
}

export const VALID_PAGE_AN_LANDSCAPE_IMAGE_3 = {
    ...BASE_AN_LANDSCAPE_IMAGE,
    id: "1.1.3",
    path: "mocks/comics/output/panels/AN/1.1.3.png",

}
export const VALID_PAGE_AN_PORTRAIT_IMAGE_3 = {
    ...BASE_AN_PORTRAIT_IMAGE,
    id: "1.1.3",
    path: "mocks/comics/output/panels/AN/1.1.3.png",
}

export const VALID_PAGE_BE_LANDSCAPE_IMAGE_3 = {
    ...BASE_BE_LANDSCAPE_IMAGE,
    id: "1.1.3",
    path: "mocks/comics/output/panels/BE/1.1.3.png",

}
export const VALID_PAGE_BE_PORTRAIT_IMAGE_3 = {
    ...BASE_BE_PORTRAIT_IMAGE,
    id: "1.1.3",
    path: "mocks/comics/output/panels/BE/1.1.3.png",
}

export const VALID_PAGE_AN_LANDSCAPE_IMAGE_4 = {
    ...BASE_AN_LANDSCAPE_IMAGE,
    id: "1.1.3",
    path: "mocks/comics/output/panels/AN/1.1.3.png",
}

export const VALID_PAGE_AN_PORTRAIT_IMAGE_4 = {
    ...BASE_AN_PORTRAIT_IMAGE,
    id: "1.1.4",
    path: "mocks/comics/output/panels/AN/1.1.4.png",
}

export const VALID_PAGE_BE_LANDSCAPE_IMAGE_4 = {
    ...BASE_BE_LANDSCAPE_IMAGE,
    id: "1.1.4",
    path: "mocks/comics/output/panels/BE/1.1.4.png",

}
export const VALID_PAGE_BE_PORTRAIT_IMAGE_4 = {
    ...BASE_BE_PORTRAIT_IMAGE,
    id: "1.1.4",
    path: "mocks/comics/output/panels/BE/1.1.4.png",
}

export const VALID_PANEL_DATA_MOCK_1 = {
    path: 'mocks/comics/output/1.1.1json',
    type: FileVariant.DATA,
    id: '1.1.1',
    data: {
        "id": "1.1.1",
        "description": {
            "en": "DESCRIPTION EN MOCK",
            "se": "DESCRIPTION SE MOCK"
        },
        "info": "VALID WITH IMAGE",
        "narration": {
            "en": "NARRATION_1.1.1_1",
            "se": "NARRATION_1.1.1_1"
        }
    }
}

export const VALID_PANEL_DATA_MOCK_2 = {
    path: 'mocks/comics/output/1.1.2json',
    type: FileVariant.DATA,
    id: '1.1.2',
    data: {
        "id": "1.1.2",
        "description": {
            "en": "DESCRIPTION EN MOCK",
            "se": "DESCRIPTION SE MOCK"
        },
        "info": "VALID WITH IMAGE",
        "narration": {
            "en": "NARRATION_1.1.2_1",
            "se": "NARRATION_1.1.2_1"
        }
    }
}

export const VALID_PANEL_DATA_MOCK_3 = {
    path: 'mocks/comics/output/1.1.3json',
    type: FileVariant.DATA,
    id: '1.1.3',
    data: {
        "id": "1.1.3",
        "description": {
            "en": "DESCRIPTION EN MOCK",
            "se": "DESCRIPTION SE MOCK"
        },
        "info": "VALID WITH IMAGE",
        "narration": {
            "en": "NARRATION_1.1.3_1",
            "se": "NARRATION_1.1.3_1"
        }
    }
}

export const VALID_PANEL_DATA_MOCK_4 = {
    path: 'mocks/comics/output/1.1.4json',
    type: FileVariant.DATA,
    id: '1.1.4',
    data: {
        "id": "1.1.4",
        "description": {
            "en": "DESCRIPTION EN MOCK",
            "se": "DESCRIPTION SE MOCK"
        },
        "info": "VALID WITH IMAGE",
        "narration": {
            "en": "NARRATION_1.1.4_1",
            "se": "NARRATION_1.1.4_1"
        }
    }
}

export const VALID_COMIC_DATA = [
    VALID_COMIC_AN_LANDSCAPE_IMAGE,
    VALID_COMIC_AN_PORTRAIT_IMAGE,
    VALID_COMIC_BE_LANDSCAPE_IMAGE,
    VALID_COMIC_BE_PORTRAIT_IMAGE,
    VALID_COMIC_DATA_MOCK
]

export const VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_1 = [
    VALID_PAGE_AN_LANDSCAPE_IMAGE_1,
    VALID_PAGE_BE_LANDSCAPE_IMAGE_1,
]

export const VALID_PORTRAIT_IMAGES_PAGE_LAYOUT_1 = [
    VALID_PAGE_AN_PORTRAIT_IMAGE_1,
    VALID_PAGE_BE_PORTRAIT_IMAGE_1
]

export const VALID_IMAGES_PAGE_LAYOUT_1 = [
    ...VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_1,
    ...VALID_PORTRAIT_IMAGES_PAGE_LAYOUT_1,
]

export const VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_2 = [
    ...VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_1,
    VALID_PAGE_AN_LANDSCAPE_IMAGE_2,
    VALID_PAGE_BE_LANDSCAPE_IMAGE_2,
]

export const VALID_PORTRAIT_IMAGES_PAGE_LAYOUT_2 = [
    ...VALID_PORTRAIT_IMAGES_PAGE_LAYOUT_1,
    VALID_PAGE_AN_PORTRAIT_IMAGE_2,
    VALID_PAGE_BE_PORTRAIT_IMAGE_2
]

export const VALID_IMAGES_PAGE_LAYOUT_2 = [
    ...VALID_IMAGES_PAGE_LAYOUT_1,
    ...VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_2,
    ...VALID_PORTRAIT_IMAGES_PAGE_LAYOUT_2
]

export const VALID_IMAGES_PAGE_LAYOUT_3 = VALID_IMAGES_PAGE_LAYOUT_2;


export const VALID_PORTRAIT_IMAGES_PAGE_LAYOUT_4 = [
    ...VALID_PORTRAIT_IMAGES_PAGE_LAYOUT_2,
    VALID_PAGE_AN_PORTRAIT_IMAGE_3,
    VALID_PAGE_BE_PORTRAIT_IMAGE_3,
    VALID_PAGE_AN_PORTRAIT_IMAGE_4,
    VALID_PAGE_BE_PORTRAIT_IMAGE_4
]

export const VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_4 = [
    ...VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_2,
    VALID_PAGE_AN_LANDSCAPE_IMAGE_3,
    VALID_PAGE_BE_LANDSCAPE_IMAGE_3,
    VALID_PAGE_AN_LANDSCAPE_IMAGE_4,
    VALID_PAGE_BE_LANDSCAPE_IMAGE_4
]


export const VALID_IMAGES_PAGE_LAYOUT_4 = [
    ...VALID_IMAGES_PAGE_LAYOUT_2,
    ...VALID_PORTRAIT_IMAGES_PAGE_LAYOUT_4,
    ...VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_4
]

export const VALID_PAGE_LAYOUT_1 = [
    ...VALID_IMAGES_PAGE_LAYOUT_1,
    VALID_PAGE_LAYOUT_1_DATA_MOCK,
    VALID_PANEL_DATA_MOCK_1,
]

export const VALID_PAGE_LAYOUT_2 = [
    ...VALID_IMAGES_PAGE_LAYOUT_2,
    VALID_PAGE_LAYOUT_2_DATA_MOCK,
    VALID_PANEL_DATA_MOCK_2
]

export const VALID_PAGE_LAYOUT_3 = [
    ...VALID_IMAGES_PAGE_LAYOUT_3,
    VALID_PAGE_LAYOUT_3_DATA_MOCK,
    VALID_PANEL_DATA_MOCK_3
]

export const VALID_PAGE_LAYOUT_4 = [
    ...VALID_IMAGES_PAGE_LAYOUT_4,
    VALID_PAGE_LAYOUT_4_DATA_MOCK,
    VALID_PANEL_DATA_MOCK_4
]

export const VALID_PAGE_DATA = [
    ...VALID_PAGE_LAYOUT_1,
    ...VALID_PAGE_LAYOUT_2,
    ...VALID_PAGE_LAYOUT_3,
    ...VALID_PAGE_LAYOUT_4
]

export const VALID_COMIC_INDEX = [
    ...VALID_COMIC_DATA,
    ...VALID_PAGE_DATA
]