import {expect, test} from 'bun:test';
import {readPaths} from "../readPaths.ts";
import {getPathsOfFileType} from "../getPathsOfFileType.ts";
import {DIR} from "./getPaths.test.ts";

test('reads files content', () => {
    expect(readPaths(getPathsOfFileType(DIR, '.json'))).toEqual([
        '{ "mock": 1 }',
        '{ "mock": 2 }',
        '{ "mock": 3 }'
    ]);
});
