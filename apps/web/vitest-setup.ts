import {vi} from "vitest";
import {WEBSITE_MOCK} from "./src/test/mocks/websiteMock.ts";


vi.mock("$core/getImages", () => ({
    getImages: () => ({'comic-mock-1/1.1.1': {default: 'string'}}) //TODO map images from WEBSITE MOCK
}))

vi.mock("$core/getComics", () => ({
    getComics: () => WEBSITE_MOCK
}))