import {describe, expect, test} from "vitest";
import {getComics} from "$core/getComics";


describe('getComics', () => {
    test('should return comics', () => {
        expect(getComics()).toBeDefined()
    })
});