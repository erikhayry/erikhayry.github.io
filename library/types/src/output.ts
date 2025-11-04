import * as z from "zod";

export const PageLayout = {
    Hero: "1",
    SplitWide: "2",
    HorizontalTriptych: "3",
    Quad: "4"
} as const;

export const PageLayoutType = z.enum([
    PageLayout.Hero,
    PageLayout.SplitWide,
    PageLayout.HorizontalTriptych,
    PageLayout.Quad
]);


export const DialogInfo = z.object({
    text: z.string(),
    person: z.string(),
});

export const PageId = z.string().regex(/^[1-9]\d*\.[1-9]\d*$/, {
    message:
        "Format must be number.number — no part can be zero (e.g. 1.2)",
});
export const PageIdTuple = z.tuple([z.string(), z.string()]);
export type PageIdTuple = z.infer<typeof PageIdTuple>;
export type PageId = z.infer<typeof PageId>;

export const PanelId = z.string().regex(/^[1-9]\d*\.[1-9]\d*\.[1-9]\d*$/, {
    message:
        "Format must be number.number.number — no part can be zero (e.g. 1.2.3)",
});
export const PanelIdTuple = z.tuple([z.string(), z.string(), z.string()]);
export type PanelIdTuple = z.infer<typeof PanelIdTuple>;
export type PanelId = z.infer<typeof PanelId>;


export const PanelInfo = z.object({
    id: PanelId,
    description: z.string(),
    narration: z.optional(z.string()),
    dialogs: z.optional(z.array(DialogInfo)),
    quotes: z.optional(z.string()),
    info: z.optional(z.string()),
});

export const PageInfo = z.object({
    id: PageId,
    layout: PageLayoutType
});

export const PageOutput = z.object({
    layout: PageLayoutType,
    panels: z.array(PanelInfo),
});

export const ComicOutput = z.object({
    pages: z.array(PageOutput),
    path: z.string(),
});

export type PanelInfo = z.infer<typeof PanelInfo>;
export type PageInfo = z.infer<typeof PageInfo>;

export type PageOutput = z.infer<typeof PageOutput>;
export type ComicOutput = z.infer<typeof ComicOutput>;
