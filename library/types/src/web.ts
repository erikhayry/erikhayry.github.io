import * as z from "zod";
import {ComicInfo, DialogInfo, PageInfo, PanelInfo} from "./output.ts";

export const Dialog = DialogInfo
export const Panel = PanelInfo
export const Page = PageInfo
export const Comic = ComicInfo;
export const Website = z.array(Comic);
export const Key = z.string()

export type Website = z.infer<typeof Website>;
export type Comic = z.infer<typeof Comic>;
export type Page = z.infer<typeof Page>;
export type Panel = z.infer<typeof Panel>;
export type Dialog = z.infer<typeof Dialog>;
