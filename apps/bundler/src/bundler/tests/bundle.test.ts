import {afterEach, expect, test} from "bun:test";
import {bundle, type BundleConfig} from "../bundle.ts";
import fs from "node:fs";
import {readPath} from "../../files/readPath.ts";
import {Website} from "@library/types";
import {getImages} from "../../files/getImages.ts";
import {COMIC_STYLE_EXTENSION, IMAGE_EXTENSION} from "../../constants.ts";

const WWW_FOLDER_DIR = "src/bundler/tests/comicsOutput";
const IMAGE_FOLDER = "src/bundler/tests/comicsOutput";
const COMICS_FOLDER_DIR = "src/bundler/tests/mocks";
const WWW_FILE = "website.json";
const TYPE_FOLDER = "src/bundler/tests/type"

const config: BundleConfig = {
    comics: {
        folder: COMICS_FOLDER_DIR
    },
    web: {
        folder: WWW_FOLDER_DIR,
        file: WWW_FILE
    },
    type: {
        folder: TYPE_FOLDER,
        schemas: {
            panel: 'panelSchema.json',
            panelOutput: 'panelOutputSchema.json'
        }
    }
};

test("should create website settings", () => {
    bundle(config);

    expect(
        Website.safeParse(JSON.parse(readPath(`${WWW_FOLDER_DIR}/${WWW_FILE}`))).success
    ).toBeTrue();
});

test("should copy images", () => {
    bundle(config);

    expect(getImages(`${IMAGE_FOLDER}/comic-1`)).toEqual([
        `1.1.1${COMIC_STYLE_EXTENSION}${IMAGE_EXTENSION}`,
        `1.1.2${COMIC_STYLE_EXTENSION}${IMAGE_EXTENSION}`,
        `1.2.1${COMIC_STYLE_EXTENSION}${IMAGE_EXTENSION}`,
        `10.1.1${COMIC_STYLE_EXTENSION}${IMAGE_EXTENSION}`,
        `2.1.1${COMIC_STYLE_EXTENSION}${IMAGE_EXTENSION}`
    ]);
    expect(getImages(`${IMAGE_FOLDER}/comic-2`)).toEqual([`1.1.1${COMIC_STYLE_EXTENSION}${IMAGE_EXTENSION}`]);
});

test("should create json schema for panel", () => {
    bundle(config);

    expect(readPath(`${TYPE_FOLDER}/${config.type.schemas.panel}`)).toBeDefined()
});

test("should create json schema for panel output", () => {
    bundle(config);

    expect(readPath(`${TYPE_FOLDER}/${config.type.schemas.panelOutput}`)).toBeDefined()
});


afterEach(() => {
    fs.rmSync(WWW_FOLDER_DIR, {recursive: true, force: true});
    fs.rmSync(TYPE_FOLDER, {recursive: true, force: true});
});
