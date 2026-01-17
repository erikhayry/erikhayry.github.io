import type {Dialog} from "@library/types";

export function getDialog({en: {person, text}}: Dialog) {
    return `${person}: ${text}`
}