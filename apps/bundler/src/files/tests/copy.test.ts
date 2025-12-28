import {afterEach, describe, expect, test} from "bun:test";
import {copyFile, copyFiles} from "../copy.ts";
import {getPathsOfFileType} from "../getPathsOfFileType.ts";
import {DIR} from "./getPaths.test.ts";
import * as fs from "node:fs";
import {DATA_EXTENSION, OUTPUT_FOLDER} from "../../constants.ts";
import {getOutputJSONS} from "../getOutputJSONS.ts";

export const OUTPUT_DIR = `${DIR}/${OUTPUT_FOLDER}`;

describe("copyFiles", () => {
    test("copy files to target", () => {
        copyFiles(getPathsOfFileType(DIR, DATA_EXTENSION), OUTPUT_DIR);

        expect(getOutputJSONS(DIR)).toEqual(getOutputJSONS(DIR));
    });
});

describe("copyFile", () => {
    test("copy file to target", () => {
        copyFile(getPathsOfFileType(DIR, DATA_EXTENSION)[0]!, OUTPUT_DIR);

        expect(getOutputJSONS(DIR)[0]!).toEqual(getOutputJSONS(DIR)[0]!);
    });
});

afterEach(() => {
    fs.rmSync(OUTPUT_DIR, {recursive: true, force: true});
});
