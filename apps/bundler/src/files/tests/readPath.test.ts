import {expect, test} from 'bun:test';
import {DIR} from "./getPaths.test.ts";
import {readPath} from "../readPath.ts";

test('reads files content', () => {
    expect(readPath(`${DIR}/file1Mock.json`)).toEqual('{ "mock": 1 }');
});
