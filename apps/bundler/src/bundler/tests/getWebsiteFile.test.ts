import {expect, test} from "bun:test";
import {getWebsiteFile} from "../getWebsiteFile.ts";
import {Comic, ComicStyle, Language, PageLayout} from "@library/types";

const DIR = "src/bundler/tests/mocks";

test("is should return comics", () => {
    const website = getWebsiteFile(DIR);

    expect(website).toHaveLength(2);

    const [comic1, comic2] = website as [Comic, Comic];

    expect(comic1.slug).toEqual("comic-1");
    expect(comic1.pages).toHaveLength(4);
    expect(comic1.styles).toEqual([ComicStyle.ANIME]);
    expect(comic2.slug).toEqual("comic-2");
    expect(comic2.pages).toHaveLength(1);
    expect(comic2.styles).toEqual([ComicStyle.ANIME]);
});

test("is should return pages", () => {
    const website = getWebsiteFile(DIR);

    expect(website).toHaveLength(2);

    const [comic1, comic2] = website as [Comic, Comic];
    expect(comic1.pages[0]).toEqual({
        layout: PageLayout.Hero,
        panels: [{
            id: "1.1.1",
            description: {[Language.EN]: "DESCRIPTION EN MOCK", [Language.SE]: "DESCRIPTION SE MOCK"},
            narration: {[Language.EN]: "NARRATION_1.1.1_1", [Language.SE]: "NARRATION_1.1.1_1"}
        }, {
            id: "1.1.2",
            description: {[Language.EN]: "DESCRIPTION EN MOCK", [Language.SE]: "DESCRIPTION SE MOCK"},
        }],
    });
    expect(comic1.pages[1]).toEqual({
        layout: PageLayout.VerticalDiptych,
        panels: [{
            id: "1.2.1",
            description: {[Language.EN]: "DESCRIPTION EN MOCK", [Language.SE]: "DESCRIPTION SE MOCK"},
        },],
    });

    expect(comic1.pages[2]).toEqual({
        layout: PageLayout.LandscapeDiptych,
        panels: [{
            id: "2.1.1",
            description: {[Language.EN]: "DESCRIPTION EN MOCK", [Language.SE]: "DESCRIPTION SE MOCK"},
        }],
    });

    expect(comic1.pages[3]).toEqual({
        layout: PageLayout.Quad,
        panels: [{
            id: "10.1.1",
            description: {[Language.EN]: "DESCRIPTION EN MOCK", [Language.SE]: "DESCRIPTION SE MOCK"},
        },],
    });

    expect(comic2.pages[0]).toEqual({
        layout: PageLayout.Hero,
        panels: [{
            id: "1.1.1",
            description: {[Language.EN]: "DESCRIPTION EN MOCK", [Language.SE]: "DESCRIPTION SE MOCK"},
            dialogs: [{
                [Language.EN]: {
                    text: 'DIALOG 1.1.1 TEXT',
                    person: 'DIALOG 1.1.1 PERSON'
                },
                [Language.SE]: {
                    text: 'DIALOG 1.1.1 TEXT',
                    person: 'DIALOG 1.1.1 PERSON'
                }
            }]
        }],
    });
});
