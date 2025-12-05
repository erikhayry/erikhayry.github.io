import {describe, expect, test} from "bun:test";
import {isValidComicOutput} from "../utils/isValidComicOutput.ts";

const DIR = "src/bundler/tests/mocks";

test("should return success if valid comic output", () => {
    expect(isValidComicOutput(`${DIR}/comic-1`)).toEqual({
        success: true
    });
});

test("should return error if no comic data", () => {
    expect(
        isValidComicOutput(`${DIR}/comic-invalid-no-comic-data`),
    ).toEqual({
        error: `${DIR}/comic-invalid-no-comic-data has no comic output file`
    })
});

test("should return error if malformed file name", () => {
    expect(
        isValidComicOutput(`${DIR}/comic-invalid-wrong-file-name`),
    ).toEqual({
        error: `${DIR}/comic-invalid-wrong-file-name has invalid file names: WRONG_NAME.json`
    })
});

test("should return error if no output files", () => {
    expect(
        isValidComicOutput(`${DIR}/comic-invalid-no-output-files`),
    ).toEqual({
        error: `${DIR}/comic-invalid-no-output-files has no files`
    })
});


describe('invalid page data', () => {
    test("should return error if malformed page data", () => {
        expect(
            isValidComicOutput(`${DIR}/comic-invalid-malformed-page-data`),
        ).toEqual({
            error: `${DIR}/comic-invalid-malformed-page-data has invalid data: 1.1.json`
        })
    });
});

describe('invalid panel data', () => {
    test("should return error if page data is missing for panel", () => {
        expect(
            isValidComicOutput(`${DIR}/comic-invalid-no-page-data`),
        ).toEqual({
            error: `${DIR}/comic-invalid-no-page-data has panels without page info: 1.2.1.json`
        })
    });

    test("should return error if malformed panel data", () => {
        expect(
            isValidComicOutput(`${DIR}/comic-invalid-malformed-panel-data`),
        ).toEqual({
            error: `${DIR}/comic-invalid-malformed-panel-data has invalid data: 1.1.3.json`
        })
    });


    test("should return error if image is missing", () => {
        expect(isValidComicOutput(`${DIR}/comic-invalid-no-image`)).toEqual({
            error: `${DIR}/comic-invalid-no-image has panels without images: 1.1.4.json`
        });
    });

    test("should return error if page info is missing", () => {
        expect(isValidComicOutput(`${DIR}/comic-invalid-no-page-data`)).toEqual({
            error: `${DIR}/comic-invalid-no-page-data has panels without page info: 1.2.1.json`
        });
    });
});

