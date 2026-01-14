import * as z from "zod";

export const ComicStyle = {
    BELGIAN_COMIC: 'BE',
    BLUEBERRY: 'BL',
    THE_BLUECOATS: 'TH',
    CLASSIC_DC_COMICS: 'CL',
    MODERN_DC_COMICS: 'MO',
    ANIME: 'AN',
    SIMPLIFIED_LINE_DRAWING: 'SI',
} as const
export const ComicStyleType = z.enum([
    ComicStyle.ANIME,
    ComicStyle.BELGIAN_COMIC,
    ComicStyle.BLUEBERRY,
    ComicStyle.THE_BLUECOATS,
    ComicStyle.CLASSIC_DC_COMICS,
    ComicStyle.MODERN_DC_COMICS,
    ComicStyle.SIMPLIFIED_LINE_DRAWING,
]);
export type ComicStyleType = z.infer<typeof ComicStyleType>;

export const ComicStyleTypes = z.array(ComicStyleType)
export const ComicId = z.string().regex(/comic/)
export type ComicId = z.infer<typeof ComicId>;

export const UNSUPPORTED = 'UNSUPPORTED'
export type UnsupportedType = z.infer<typeof UNSUPPORTED>;

export const Language = {
    EN: "en",
    SE: "se",
} as const;
export const LanguageType = z.enum([
    Language.EN,
    Language.SE,
]);
export const Text = z.record(LanguageType, z.string())
export type Text = z.infer<typeof Text>;

export const ImageVariant = {
    Landscape: 'l',
    Portrait: 'p'
} as const;
export const ImageVariantType = z.enum([
    ImageVariant.Landscape,
    ImageVariant.Portrait,
]);
export type ImageVariantType = z.infer<typeof ImageVariantType>

export const PageLayout = {
    Hero: "1",
    VerticalDiptych: "2",
    LandscapeDiptych: "3",
    Quad: "4"
} as const;

export const PageLayoutType = z.enum([
    PageLayout.Hero,
    PageLayout.VerticalDiptych,
    PageLayout.LandscapeDiptych,
    PageLayout.Quad
]);
export type PageLayoutValue = z.infer<typeof PageLayoutType>

export const DialogInfo = z.record(LanguageType, z.object({
    text: z.string(),
    person: z.string(),
}));

export const PageId = z.string().regex(/^[1-9]\d*\.[1-9]\d*$/, {
    message:
        "Format must be number.number — no part can be zero (e.g. 1.2)",
});
export type PageId = z.infer<typeof PageId>;

export const PanelId = z.string().regex(/^[1-9]\d*\.[1-9]\d*\.[1-9]\d*$/, {
    message:
        "Format must be number.number.number — no part can be zero (e.g. 1.2.3)",
});
export type PanelId = z.infer<typeof PanelId>;

export const DataId = z.union([PageId, PanelId, ComicId])

export const PanelInfo = z.object({
    id: PanelId,
    description: Text,
    narration: z.optional(Text),
    dialogs: z.optional(z.array(DialogInfo)),
    info: z.optional(z.string())
});

export const PageInfo = z.object({
    id: PageId,
    layout: PageLayoutType
});

export const ComicInfo = z.object({
    styles: ComicStyleTypes,
    title: Text
})

export type PanelInfo = z.infer<typeof PanelInfo>;
export type PageInfo = z.infer<typeof PageInfo>;
export type ComicInfo = z.infer<typeof ComicInfo>;

