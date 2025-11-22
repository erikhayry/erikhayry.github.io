import type {Dialog} from "@library/types";

export function getDialog({person, text}: Dialog) {
    return `${person}: ${text}`
}