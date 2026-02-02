import {describe, expect, test} from "vitest";
import {getComics} from "$core/getComics";
import {WEBSITE_MOCK} from "$mock/data/websiteMock";

describe("getComics", () => {
    test("should return comics", () => {
        expect(getComics()[0].slug).toBe(WEBSITE_MOCK[0].slug);
    });
});
