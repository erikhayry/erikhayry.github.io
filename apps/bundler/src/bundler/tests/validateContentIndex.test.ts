import {describe, expect, test} from "bun:test";
import {ErrorMessage, validateContentIndex, VALIDATION} from "../validateContentIndex.ts";
import {ComicStyle} from "@library/types";
import {
    VALID_COMIC_AN_LANDSCAPE_IMAGE,
    VALID_COMIC_AN_PORTRAIT_IMAGE,
    VALID_COMIC_BE_LANDSCAPE_IMAGE,
    VALID_COMIC_BE_PORTRAIT_IMAGE,
    VALID_COMIC_DATA,
    VALID_COMIC_DATA_MOCK,
    VALID_COMIC_INDEX,
    VALID_IMAGES_PAGE_LAYOUT_1,
    VALID_IMAGES_PAGE_LAYOUT_2,
    VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_1,
    VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_2,
    VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_4,
    VALID_PAGE_AN_LANDSCAPE_IMAGE_1,
    VALID_PAGE_LAYOUT_1_DATA_MOCK,
    VALID_PAGE_LAYOUT_2_DATA_MOCK,
    VALID_PAGE_LAYOUT_3_DATA_MOCK,
    VALID_PAGE_LAYOUT_4_DATA_MOCK,
    VALID_PANEL_DATA_MOCK_1
} from "./mock/data.ts";


describe('validateContentIndex', () => {
    test('should validate', () => {
        expect(validateContentIndex(VALID_COMIC_INDEX)).toBeTrue()
    })


    describe('validate data content', () => {
        describe('comic data', () => {

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

            test('should throw error on invalid data', () => {
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
            test('should throw error on invalid id', () => {
                try {
                    expect(validateContentIndex([...VALID_COMIC_INDEX, {
                        ...VALID_PAGE_LAYOUT_1_DATA_MOCK,
                        id: 'NOPE'
                    }])).toThrow()
                } catch (error: any) {
                    expect(error.validation).toEqual(VALIDATION.DATA_FILE_ID)
                    expect(error.id).toEqual('NOPE')
                    expect(error.message).toBeDefined()
                    expect(error.path).toEqual(VALID_PAGE_LAYOUT_1_DATA_MOCK.path)
                }
            })

            test('should throw error on invalid data', () => {
                try {
                    expect(validateContentIndex([...VALID_COMIC_INDEX, {
                        ...VALID_PAGE_LAYOUT_1_DATA_MOCK,
                        data: {}
                    }])).toThrow()
                } catch (error: any) {
                    expect(error.validation).toEqual(VALIDATION.PAGE_DATA)
                    expect(error.message).toBeDefined()
                    expect(error.id).toEqual(VALID_PAGE_LAYOUT_1_DATA_MOCK.id)
                    expect(error.path).toEqual(VALID_PAGE_LAYOUT_1_DATA_MOCK.path)
                }
            })
        })

        describe('panel data', () => {
            test('should throw error on invalid id', () => {
                try {
                    expect(validateContentIndex([...VALID_COMIC_INDEX, {
                        ...VALID_PANEL_DATA_MOCK_1,
                        id: 'NOPE'
                    }])).toThrow()
                } catch (error: any) {
                    expect(error.validation).toEqual(VALIDATION.DATA_FILE_ID)
                    expect(error.id).toEqual('NOPE')
                    expect(error.message).toBeDefined()
                    expect(error.path).toEqual(VALID_PANEL_DATA_MOCK_1.path)
                }
            })

            test('should throw error on invalid data', () => {
                try {
                    expect(validateContentIndex([...VALID_COMIC_INDEX, {
                        ...VALID_PANEL_DATA_MOCK_1,
                        data: {}
                    }])).toThrow()
                } catch (error: any) {
                    expect(error.validation).toEqual(VALIDATION.PANEL_DATA)
                    expect(error.message).toBeDefined()
                    expect(error.id).toEqual(VALID_PANEL_DATA_MOCK_1.id)
                    expect(error.path).toEqual(VALID_PANEL_DATA_MOCK_1.path)
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
                    expect(validateContentIndex([VALID_COMIC_DATA_MOCK])).toThrow()
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

        describe('page file', () => {
            describe('layout 1', () => {
                test('should not validate if landscape panel is missing for page layout 1', () => {
                    try {
                        expect(validateContentIndex([...VALID_COMIC_DATA, VALID_PAGE_LAYOUT_1_DATA_MOCK])).toThrow()
                    } catch (error: any) {
                        expect(error.message).toEqual(ErrorMessage[VALIDATION.LAYOUT_LANDSCAPE_IMAGE_COUNT])
                        expect(error.validation).toEqual(VALIDATION.LAYOUT_LANDSCAPE_IMAGE_COUNT)
                        expect(error.comicStyle).toEqual(ComicStyle.ANIME)
                    }
                })
                test('should not validate if portrait panel is missing for page layout 1', () => {
                    try {
                        expect(validateContentIndex([...VALID_COMIC_DATA, VALID_PAGE_LAYOUT_1_DATA_MOCK, ...VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_1])).toThrow()
                    } catch (error: any) {
                        expect(error.message).toEqual(ErrorMessage[VALIDATION.LAYOUT_PORTRAIT_IMAGE_COUNT])
                        expect(error.validation).toEqual(VALIDATION.LAYOUT_PORTRAIT_IMAGE_COUNT)
                        expect(error.comicStyle).toEqual(ComicStyle.ANIME)
                    }
                })
            });

            describe('layout 2', () => {
                test('should not validate if landscape panel is missing for page layout 2', () => {
                    try {
                        expect(validateContentIndex([...VALID_COMIC_DATA, VALID_PAGE_LAYOUT_2_DATA_MOCK, VALID_PAGE_AN_LANDSCAPE_IMAGE_1])).toThrow()
                    } catch (error: any) {
                        expect(error.message).toEqual(ErrorMessage[VALIDATION.LAYOUT_LANDSCAPE_IMAGE_COUNT])
                        expect(error.validation).toEqual(VALIDATION.LAYOUT_LANDSCAPE_IMAGE_COUNT)
                        expect(error.comicStyle).toEqual(ComicStyle.ANIME)
                    }
                })
                test('should not validate if portrait panel is missing for page layout 2', () => {
                    try {
                        expect(validateContentIndex([...VALID_COMIC_DATA, VALID_PAGE_LAYOUT_2_DATA_MOCK, ...VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_2])).toThrow()
                    } catch (error: any) {
                        expect(error.message).toEqual(ErrorMessage[VALIDATION.LAYOUT_PORTRAIT_IMAGE_COUNT])
                        expect(error.validation).toEqual(VALIDATION.LAYOUT_PORTRAIT_IMAGE_COUNT)
                        expect(error.comicStyle).toEqual(ComicStyle.ANIME)
                    }
                })
            });

            describe('layout 3', () => {
                test('should not validate if landscape panel is missing for page layout 3', () => {
                    try {
                        expect(validateContentIndex([...VALID_COMIC_DATA, VALID_PAGE_LAYOUT_3_DATA_MOCK])).toThrow()
                    } catch (error: any) {
                        expect(error.message).toEqual(ErrorMessage[VALIDATION.LAYOUT_LANDSCAPE_IMAGE_COUNT])
                        expect(error.validation).toEqual(VALIDATION.LAYOUT_LANDSCAPE_IMAGE_COUNT)
                        expect(error.comicStyle).toEqual(ComicStyle.ANIME)
                    }
                })
                test('should not validate if portrait panel is missing for page layout 2', () => {
                    try {
                        expect(validateContentIndex([...VALID_COMIC_DATA, VALID_PAGE_LAYOUT_3_DATA_MOCK, ...VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_2])).toThrow()
                    } catch (error: any) {
                        expect(error.message).toEqual(ErrorMessage[VALIDATION.LAYOUT_PORTRAIT_IMAGE_COUNT])
                        expect(error.validation).toEqual(VALIDATION.LAYOUT_PORTRAIT_IMAGE_COUNT)
                        expect(error.comicStyle).toEqual(ComicStyle.ANIME)
                    }
                })
            });

            describe('layout 4', () => {
                test('should not validate if landscape panel is missing for page layout 4', () => {
                    try {
                        expect(validateContentIndex([...VALID_COMIC_DATA, VALID_PAGE_LAYOUT_4_DATA_MOCK,])).toThrow()
                    } catch (error: any) {
                        expect(error.message).toEqual(ErrorMessage[VALIDATION.LAYOUT_LANDSCAPE_IMAGE_COUNT])
                        expect(error.validation).toEqual(VALIDATION.LAYOUT_LANDSCAPE_IMAGE_COUNT)
                        expect(error.comicStyle).toEqual(ComicStyle.ANIME)
                    }
                })

                test('should not validate if portrait panel is missing for page layout 4', () => {
                    try {
                        expect(validateContentIndex([...VALID_COMIC_DATA, VALID_PAGE_LAYOUT_4_DATA_MOCK, ...VALID_LANDSCAPE_IMAGES_PAGE_LAYOUT_4])).toThrow()
                    } catch (error: any) {
                        expect(error.message).toEqual(ErrorMessage[VALIDATION.LAYOUT_PORTRAIT_IMAGE_COUNT])
                        expect(error.validation).toEqual(VALIDATION.LAYOUT_PORTRAIT_IMAGE_COUNT)
                        expect(error.comicStyle).toEqual(ComicStyle.ANIME)
                    }
                })
            });
        });

        describe('panel file', () => {
            describe('layout 1', () => {
                test('should not validate if panel data is missing for page layout 1', () => {
                    try {
                        expect(validateContentIndex([...VALID_COMIC_DATA, VALID_PAGE_LAYOUT_1_DATA_MOCK, ...VALID_IMAGES_PAGE_LAYOUT_1])).toThrow()
                    } catch (error: any) {
                        expect(error.message).toEqual(ErrorMessage[VALIDATION.PANEL_DATA_FILE])
                        expect(error.validation).toEqual(VALIDATION.PANEL_DATA_FILE)
                        expect(error.id).toEqual(VALID_PAGE_LAYOUT_1_DATA_MOCK.id)
                    }
                })
            })

            describe('layout 2', () => {
                test('should not validate if panel data is missing for page layout 2', () => {
                    try {
                        expect(validateContentIndex([...VALID_COMIC_DATA, VALID_PAGE_LAYOUT_2_DATA_MOCK, ...VALID_IMAGES_PAGE_LAYOUT_2])).toThrow()
                    } catch (error: any) {
                        expect(error.message).toEqual(ErrorMessage[VALIDATION.PANEL_DATA_FILE])
                        expect(error.validation).toEqual(VALIDATION.PANEL_DATA_FILE)
                        expect(error.id).toEqual(VALID_PAGE_LAYOUT_1_DATA_MOCK.id)
                    }
                })
            });
        })
    });
})
