import {expect, test} from "bun:test";
import {FileVariant, getSupportedFolderContentIndex} from "../getSupportedFolderContentIndex.ts";
import {getJSON} from "../../files/getJSON.ts";
import {ImageVariant} from "../../files/getImage.ts";
import {ComicStyle} from "@library/types";
import {DATA_EXTENSION} from "../../constants.ts";


const comicFolder = 'src/bundler/tests/mocks/comics/comic-1';

test('should return index', () => {
    expect(getSupportedFolderContentIndex(comicFolder)).toEqual([
        {
            path: `${comicFolder}/output/1.1.1.json`,
            type: FileVariant.DATA,
            id: '1.1.1',
            data: getJSON(`${comicFolder}/output/1.1.1.json`)
        },
        {
            path: `${comicFolder}/output/1.1.json`,
            type: FileVariant.DATA,
            id: '1.1',
            data: getJSON(`${comicFolder}/output/1.1.json`)
        },
        {
            path: `${comicFolder}/output/comic.json`,
            type: FileVariant.DATA,
            id: 'comic',
            data: getJSON(`${comicFolder}/output/comic.json`)
        },
        {
            path: `${comicFolder}/output/references/1.1.1.json`,
            data: getJSON(`${comicFolder}/output/references/1.1.1.json`),
            id: "1.1.1",
            type: DATA_EXTENSION,
        },
        {
            path: `${comicFolder}/output/panels/AN/1.1.1.l.png`,
            type: FileVariant.IMAGE,
            style: ComicStyle.ANIME,
            id: '1.1.1.l',
            width: 1536,
            height: 1024,
            variant: ImageVariant.LANDSCAPE
        },
        {
            path: `${comicFolder}/output/panels/AN/1.1.1.p.png`,
            type: FileVariant.IMAGE,
            style: ComicStyle.ANIME,
            id: '1.1.1.p',
            width: 1024,
            height: 1536,
            variant: ImageVariant.PORTRAIT
        },
        {
            id: "comic.l",
            path: `${comicFolder}/output/panels/AN/comic.l.png`,
            type: FileVariant.IMAGE,
            style: ComicStyle.ANIME,
            height: 1024,
            width: 1536,
            variant: ImageVariant.LANDSCAPE

        },
        {
            id: "comic.p",
            path: `${comicFolder}/output/panels/AN/comic.p.png`,
            type: FileVariant.IMAGE,
            style: ComicStyle.ANIME,
            width: 1024,
            height: 1536,
            variant: ImageVariant.PORTRAIT
        },
        {
            id: "UNSUPPORTED_IMAGE_FORMAT",
            path: `${comicFolder}/output/panels/AN/UNSUPPORTED_IMAGE_FORMAT.png`,
            type: FileVariant.IMAGE,
            style: ComicStyle.ANIME,
            height: 413,
            width: 413,
            variant: ImageVariant.UNSUPPORTED,
        },
    ])
});
