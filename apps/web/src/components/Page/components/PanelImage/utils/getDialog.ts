import type {Dialog} from "@library/types";
import {i18n} from "../../../../../i18n/i18n";

export function getDialog(dialog: Dialog) {
    return i18n(dialog)
}