import {describe, expect, test} from "bun:test";
import {isValidComicOutput} from "../utils/isValidComicOutput.ts";

const DIR = "src/bundler/tests/mocks";

test("should return true if valid comic output", () => {
    expect(isValidComicOutput(`${DIR}/comic-1`)).toBeTruthy();
});

test("should return false if malformed file name", () => {
    expect(
        isValidComicOutput(`${DIR}/comic-invalid-wrong-file-name`),
    ).toBeFalsy();
});

test("should return false if no output files", () => {
    expect(
        isValidComicOutput(`${DIR}/comic-invalid-no-output-files`),
    ).toBeFalsy();
});


describe('invalid page data', () => {
    test("should return false if malformed page data", () => {
        expect(
            isValidComicOutput(`${DIR}/comic-invalid-malformed-page-data`),
        ).toBeFalsy();
    });
});

describe('invalid panel data', () => {
    test("should return false if page data is missing for panel", () => {
        expect(
            isValidComicOutput(`${DIR}/comic-invalid-no-page-data`),
        ).toBeFalsy();
    });

    test("should return false if malformed panel data", () => {
        expect(
            isValidComicOutput(`${DIR}/comic-invalid-malformed-panel-data`),
        ).toBeFalsy();
    });


    test("should return false if image is missing", () => {
        expect(isValidComicOutput(`${DIR}/comic-invalid-no-image`)).toBeFalsy();
    });
});

