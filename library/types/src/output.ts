import * as z from "zod";

export const PageLayoutType = {
    Hero: "Hero (1 panel)",
    SplitWide: "Split Wide (2 panels)",
    HorizontalTriptych: "Horizontal Triptych (3 panels)",
    Quad: "Quad (4 panels)"
} as const;

export const PageLayoutTypeSchema = z.enum([
    PageLayoutType.Hero,
    PageLayoutType.SplitWide,
    PageLayoutType.HorizontalTriptych,
    PageLayoutType.Quad
]);

export type PageLayoutType = z.infer<typeof PageLayoutTypeSchema>;

export const DialogOutput = z.object({
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


export const PanelOutput = z.object({
    id: PanelId,
    description: z.string(),
    narration: z.optional(z.string()),
    dialogs: z.optional(z.array(DialogOutput)),
    quotes: z.optional(z.string()),
    info: z.optional(z.string()),
});

export const PageInfoOutput = z.object({
    id: PageId,
    layout: PageLayoutType
});

export const PageOutput = z.object({
    layout: PageLayoutType,
    panels: z.array(PanelOutput),
});

export const ComicOutput = z.object({
    pages: z.array(PageOutput),
    path: z.string(),
});

export type PageInfoOutput = z.infer<typeof PageInfoOutput>;
export type PanelOutput = z.infer<typeof PanelOutput>;
export type PageOutput = z.infer<typeof PageOutput>;
export type ComicOutput = z.infer<typeof ComicOutput>;
