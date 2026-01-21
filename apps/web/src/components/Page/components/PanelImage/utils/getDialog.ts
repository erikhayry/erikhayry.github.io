import type {Dialog} from "@library/types";
import {CURRENT_LANGUAGE} from "../../../../../i18n/i18n";

export function getDialog({[CURRENT_LANGUAGE]: {person, text}}: Dialog) {
    return `${person}: ${text}`
}