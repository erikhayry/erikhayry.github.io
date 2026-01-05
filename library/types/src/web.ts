import * as z from "zod";
import {ComicStyleType, DialogInfo, PageLayoutType, PanelId, Text} from "./output.ts";

export const Dialog = DialogInfo

export const Panel = z.object({
    id: PanelId,
    description: Text,
    narration: z.optional(Text),
    dialogs: z.optional(z.array(Dialog))
});

export const Page = z.object({
    layout: PageLayoutType,
    panels: z.array(Panel),
});

export const Comic = z.object({
    slug: z.string(),
    pages: z.array(Page),
    styles: z.array(ComicStyleType)
});
export const Website = z.array(Comic);
export const Key = z.string()

export type Website = z.infer<typeof Website>;
export type Comic = z.infer<typeof Comic>;
export type Page = z.infer<typeof Page>;
export type Panel = z.infer<typeof Panel>;
export type Dialog = z.infer<typeof Dialog>;
