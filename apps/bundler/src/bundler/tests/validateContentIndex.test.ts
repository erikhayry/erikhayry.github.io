import {describe, expect, test} from "bun:test";
import {ErrorMessage, validateContentIndex, VALIDATION} from "../validateContentIndex.ts";
import {FileVariant} from "../getSupportedFolderContentIndex.ts";
import {getJSON} from "../../files/getJSON.ts";
import {ImageVariant} from "../../files/getImage.ts";
import {ComicStyle} from "@library/types";

const VALID_COMIC_DATA_MOCK = {
    path: 'mocks/comics/output/comic.json',
    type: FileVariant.DATA,
    id: 'comic',
    data: getJSON('mocks/comics/output/comic.json')
}

const VALID_COMIC_AN_LANDSCAPE_IMAGE = {
    id: "comic.l",
    path: "mocks/comics/output/panels/AN/comic.l.png",
    type: FileVariant.IMAGE,
    height: 1536,
    width: 1024,
    variant: ImageVariant.LANDSCAPE,
    style: ComicStyle.ANIME

}
const VALID_COMIC_AN_PORTRAIT_IMAGE = {
    id: "comic.p",
    path: "mocks/comics/output/panels/AN/comic.p.png",
    type: FileVariant.IMAGE,
    height: 1024,
    width: 1536,
    variant: ImageVariant.PORTRAIT,
    style: ComicStyle.ANIME
}

const VALID_COMIC_BE_LANDSCAPE_IMAGE = {
    id: "comic.l",
    path: "mocks/comics/output/panels/BE/comic.l.png",
    type: FileVariant.IMAGE,
    height: 1536,
    width: 1024,
    variant: ImageVariant.LANDSCAPE,
    style: ComicStyle.BELGIAN_COMIC

}
const VALID_COMIC_BE_PORTRAIT_IMAGE = {
    id: "comic.p",
    path: "mocks/comics/output/panels/BE/comic.p.png",
    type: FileVariant.IMAGE,
    height: 1024,
    width: 1536,
    variant: ImageVariant.PORTRAIT,
    style: ComicStyle.BELGIAN_COMIC
}

const VALID_PAGE_DATA_MOCK = {
    path: 'mocks/comics/output/1.1.json',
    type: FileVariant.DATA,
    id: '1.1',
    data: getJSON('mocks/comics/output/1.1.json')
}

const VALID_PANEL_DATA_MOCK = {
    path: 'mocks/comics/output/1.1.1json',
    type: FileVariant.DATA,
    id: '1.1.1',
    data: getJSON('mocks/comics/output/1.1.1.json')
}

const VALID_COMIC_INDEX = [
    VALID_COMIC_AN_LANDSCAPE_IMAGE,
    VALID_COMIC_AN_PORTRAIT_IMAGE,
    VALID_COMIC_BE_LANDSCAPE_IMAGE,
    VALID_COMIC_BE_PORTRAIT_IMAGE,
    VALID_COMIC_DATA_MOCK
]

describe('validateContentIndex', () => {
    describe('validate data content', () => {
        describe('comic data', () => {
            test('should validate page data id', () => {
                expect(validateContentIndex([...VALID_COMIC_INDEX, VALID_COMIC_DATA_MOCK])).toBeTrue()
            })

            test('should throw error on invalid id', () => {
                try {
                    expect(validateContentIndex([...VALID_COMIC_INDEX, {
                        ...VALID_COMIC_DATA_MOCK,
                        id: 'NOPE'
                    }])).toThrow()
                } catch (error: any) {
                    expect(error.validation).toEqual(VALIDATION.DATA_FILE_ID)
                    expect(error.id).toEqual('NOPE')
                    expect(error.message).toBeDefined()
                    expect(error.path).toEqual(VALID_COMIC_DATA_MOCK.path)
                }
            })

            test('should throw error on data', () => {
                try {
                    expect(validateContentIndex([...VALID_COMIC_INDEX, {
                        ...VALID_COMIC_DATA_MOCK,
                        data: {}
                    }])).toThrow()
                } catch (error: any) {
                    expect(error.validation).toEqual(VALIDATION.COMIC_DATA)
                    expect(error.message).toBeDefined()
                    expect(error.id).toEqual(VALID_COMIC_DATA_MOCK.id)
                    expect(error.path).toEqual(VALID_COMIC_DATA_MOCK.path)
                }
            })
        })

        describe('page data', () => {
            test('should validate page data id', () => {
                expect(validateContentIndex([...VALID_COMIC_INDEX, VALID_PAGE_DATA_MOCK])).toBeTrue()
            })

            test('should throw error on invalid id', () => {
                try {
                    expect(validateContentIndex([...VALID_COMIC_INDEX, {
                        ...VALID_PAGE_DATA_MOCK,
                        id: 'NOPE'
                    }])).toThrow()
                } catch (error: any) {
                    expect(error.validation).toEqual(VALIDATION.DATA_FILE_ID)
                    expect(error.id).toEqual('NOPE')
                    expect(error.message).toBeDefined()
                    expect(error.path).toEqual(VALID_PAGE_DATA_MOCK.path)
                }
            })

            test('should throw error on data', () => {
                try {
                    expect(validateContentIndex([...VALID_COMIC_INDEX, {
                        ...VALID_PAGE_DATA_MOCK,
                        data: {}
                    }])).toThrow()
                } catch (error: any) {
                    expect(error.validation).toEqual(VALIDATION.PAGE_DATA)
                    expect(error.message).toBeDefined()
                    expect(error.id).toEqual(VALID_PAGE_DATA_MOCK.id)
                    expect(error.path).toEqual(VALID_PAGE_DATA_MOCK.path)
                }
            })
        })

        describe('panel data', () => {
            test('should validate panel data id', () => {
                expect(validateContentIndex([...VALID_COMIC_INDEX, VALID_PANEL_DATA_MOCK])).toBeTrue()
            })

            test('should throw error on invalid id', () => {
                try {
                    expect(validateContentIndex([...VALID_COMIC_INDEX, {
                        ...VALID_PANEL_DATA_MOCK,
                        id: 'NOPE'
                    }])).toThrow()
                } catch (error: any) {
                    expect(error.validation).toEqual(VALIDATION.DATA_FILE_ID)
                    expect(error.id).toEqual('NOPE')
                    expect(error.message).toBeDefined()
                    expect(error.path).toEqual(VALID_PANEL_DATA_MOCK.path)
                }
            })

            test('should throw error on data', () => {
                try {
                    expect(validateContentIndex([...VALID_COMIC_INDEX, {
                        ...VALID_PANEL_DATA_MOCK,
                        data: {}
                    }])).toThrow()
                } catch (error: any) {
                    expect(error.validation).toEqual(VALIDATION.PANEL_DATA)
                    expect(error.message).toBeDefined()
                    expect(error.id).toEqual(VALID_PANEL_DATA_MOCK.id)
                    expect(error.path).toEqual(VALID_PANEL_DATA_MOCK.path)
                }
            })
        })
    })

    describe('validate files', () => {
        describe('comic file', () => {
            test('should validate if exists', () => {
                expect(validateContentIndex(VALID_COMIC_INDEX)).toBeTrue()
            });

            test('should not validate if missing', () => {
                try {
                    expect(validateContentIndex([])).toThrow()
                } catch (error: any) {
                    expect(error.validation).toEqual(VALIDATION.COMIC_DATA_FILE)
                    expect(error.message).toEqual(ErrorMessage[VALIDATION.COMIC_DATA_FILE])
                }
            });


            test('should not validate if portrait image is missing for comic style AN', () => {
                try {
                    expect(validateContentIndex([VALID_COMIC_DATA_MOCK, VALID_COMIC_AN_LANDSCAPE_IMAGE, VALID_COMIC_BE_PORTRAIT_IMAGE, VALID_COMIC_BE_LANDSCAPE_IMAGE])).toThrow()
                } catch (error: any) {
                    expect(error.message).toEqual(ErrorMessage[VALIDATION.COMIC_DATA_PORTRAIT_IMAGE_FILE])
                    expect(error.validation).toEqual(VALIDATION.COMIC_DATA_PORTRAIT_IMAGE_FILE)
                    expect(error.comicStyle).toEqual(ComicStyle.ANIME)
                }
            })

            test('should not validate if landscape image is missing for comic style AN', () => {
                try {
                    expect(validateContentIndex([VALID_COMIC_DATA_MOCK, VALID_COMIC_AN_PORTRAIT_IMAGE, VALID_COMIC_BE_PORTRAIT_IMAGE, VALID_COMIC_BE_LANDSCAPE_IMAGE])).toThrow()
                } catch (error: any) {
                    expect(error.message).toEqual(ErrorMessage[VALIDATION.COMIC_DATA_LANDSCAPE_IMAGE_FILE])
                    expect(error.validation).toEqual(VALIDATION.COMIC_DATA_LANDSCAPE_IMAGE_FILE)
                    expect(error.comicStyle).toEqual(ComicStyle.ANIME)
                }
            })

            test('should not validate if portrait image is missing for comic style BE', () => {
                try {
                    expect(validateContentIndex([VALID_COMIC_DATA_MOCK, VALID_COMIC_AN_LANDSCAPE_IMAGE, VALID_COMIC_AN_PORTRAIT_IMAGE, VALID_COMIC_BE_LANDSCAPE_IMAGE])).toThrow()
                } catch (error: any) {
                    expect(error.message).toEqual(ErrorMessage[VALIDATION.COMIC_DATA_PORTRAIT_IMAGE_FILE])
                    expect(error.validation).toEqual(VALIDATION.COMIC_DATA_PORTRAIT_IMAGE_FILE)
                    expect(error.comicStyle).toEqual(ComicStyle.BELGIAN_COMIC)
                }
            })

            test('should not validate if landscape image is missing for comic style BE', () => {
                try {
                    expect(validateContentIndex([VALID_COMIC_DATA_MOCK, VALID_COMIC_AN_PORTRAIT_IMAGE, VALID_COMIC_AN_LANDSCAPE_IMAGE, VALID_COMIC_BE_PORTRAIT_IMAGE])).toThrow()
                } catch (error: any) {
                    expect(error.message).toEqual(ErrorMessage[VALIDATION.COMIC_DATA_LANDSCAPE_IMAGE_FILE])
                    expect(error.validation).toEqual(VALIDATION.COMIC_DATA_LANDSCAPE_IMAGE_FILE)
                    expect(error.comicStyle).toEqual(ComicStyle.BELGIAN_COMIC)
                }
            })
        });
    })
})
