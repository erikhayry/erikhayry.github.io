import {expect, test} from "bun:test";
import {FileVariant, getSupportedFolderContentIndex} from "../getSupportedFolderContentIndex.ts";
import {getJSON} from "../../files/getJSON.ts";
import {ImageVariant, ValidImageVariant} from "../../files/getImage.ts";
import {ComicStyle} from "@library/types";


test('should return index', () => {
    expect(getSupportedFolderContentIndex('mocks/comics')).toEqual([
        {
            path: 'mocks/comics/output/1.1.1.json',
            type: FileVariant.DATA,
            id: '1.1.1',
            data: getJSON('mocks/comics/output/1.1.1.json')
        },
        {
            path: 'mocks/comics/output/1.1.json',
            type: FileVariant.DATA,
            id: '1.1',
            data: getJSON('mocks/comics/output/1.1.json')
        },
        {
            path: 'mocks/comics/output/comic.json',
            type: FileVariant.DATA,
            id: 'comic',
            data: getJSON('mocks/comics/output/comic.json')
        },
        {
            path: 'mocks/comics/output/panels/BE/1.1.1.l.png',
            type: FileVariant.IMAGE,
            style: ComicStyle.BELGIAN_COMIC,
            id: '1.1.1',
            width: 1536,
            height: 1024,
            variant: ValidImageVariant.LANDSCAPE

        },
        {
            id: "comic.l",
            path: "mocks/comics/output/panels/BE/comic.l.png",
            type: FileVariant.IMAGE,
            style: ComicStyle.BELGIAN_COMIC,
            height: 1024,
            width: 1536,
            variant: ValidImageVariant.LANDSCAPE

        },
        {
            id: "comic.p",
            path: "mocks/comics/output/panels/BE/comic.p.png",
            type: FileVariant.IMAGE,
            style: ComicStyle.BELGIAN_COMIC,
            height: 1536,
            width: 1024,
            variant: ValidImageVariant.PORTRAIT
        },
        {
            path: 'mocks/comics/output/panels/AN/1.1.1.l.png',
            type: FileVariant.IMAGE,
            style: ComicStyle.ANIME,
            id: '1.1.1',
            width: 1536,
            height: 1024,
            variant: ValidImageVariant.LANDSCAPE

        },

        {
            id: "comic.l",
            path: "mocks/comics/output/panels/AN/comic.l.png",
            type: FileVariant.IMAGE,
            style: ComicStyle.ANIME,
            height: 1024,
            width: 1536,
            variant: ValidImageVariant.LANDSCAPE

        },
        {
            id: "comic.p",
            path: "mocks/comics/output/panels/AN/comic.p.png",
            type: FileVariant.IMAGE,
            style: ComicStyle.ANIME,
            height: 1536,
            width: 1024,
            variant: ValidImageVariant.PORTRAIT
        },
        {
            id: "UNSUPPORTED_IMAGE_FORMAT",
            path: "mocks/comics/output/panels/AN/UNSUPPORTED_IMAGE_FORMAT.png",
            type: FileVariant.IMAGE,
            style: ComicStyle.ANIME,
            height: 413,
            width: 413,
            variant: ImageVariant.UNSUPPORTED,
        },
    ])
});