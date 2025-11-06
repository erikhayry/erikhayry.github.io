import {vi} from "vitest";
import {WEBSITE_MOCK} from "./src/test/mocks/websiteMock.ts";

vi.mock("$core/getImages", () => ({
    getImages: () =>
        import.meta.glob(
            '$mock/assets/**/*.png',
            {
                eager: true,
                query: {
                    enhanced: true
                }
            }
        )
}))

vi.mock("$core/getComics", () => ({
    getComics: () => WEBSITE_MOCK
}))