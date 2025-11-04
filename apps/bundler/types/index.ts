import type {PanelInfo} from "@library/types";

export type ValidationError = {
    error: string
}
export type Validation = {
    success: true
} | ValidationError

export interface NumberedPageOutput {
    pageId: string,
    panels: PanelInfo[]
}
