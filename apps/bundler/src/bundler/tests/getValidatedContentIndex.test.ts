import {describe, expect, test} from "bun:test";
import {ERROR, getValidatedContentIndex} from "../getValidatedContentIndex.ts";
import {VALID_COMIC_DATA_MOCK, VALID_COMIC_INDEX,} from "./mock/data.ts";


describe('validateContentIndex', () => {
    test('should validate', () => {
        const {comicFile, images} = getValidatedContentIndex(VALID_COMIC_INDEX)

        expect(comicFile).toEqual(VALID_COMIC_DATA_MOCK)
        expect(images).toHaveLength(40)
    })


    describe('comic data', () => {
        test('should throw error on missing file', () => {
            try {
                expect(getValidatedContentIndex([])).toThrow()
            } catch (error: any) {
                expect(error.message).toEqual(ERROR.MISSING_COMIC_FILE)
            }
        })

        test('should throw error on malformed data', () => {
            try {
                expect(getValidatedContentIndex([{...VALID_COMIC_DATA_MOCK, data: {}}])).toThrow()
            } catch (error: any) {
                expect(error.message).toBeDefined()
            }
        })
    })
})
