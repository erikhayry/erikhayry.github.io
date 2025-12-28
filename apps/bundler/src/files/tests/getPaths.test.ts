import {expect, test} from 'bun:test';
import {getPathsOfFileType} from '../getPathsOfFileType.ts';

export const DIR = 'src/files/tests/mocks'

test('getPathsOfFileType returns only files of file type json', () => {
    expect(getPathsOfFileType(DIR, '.json')).toEqual([
        `${DIR}/file1Mock.json`, `${DIR}/file2Mock.json`, `${DIR}/file3Mock.json`,
    ]);
});

test('getPathsOfFileType returns only files of file type txt', () => {
    expect(getPathsOfFileType(DIR, '.txt')).toEqual([
        `${DIR}/file1Mock.txt`
    ]);
});

