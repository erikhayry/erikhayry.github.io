import {Language} from "@library/types";
import {i18n} from "../i18n/i18n";
import {TEXT} from "../i18n/ui";

export const load = (): {
    title: string;
} => {
    return {
        title: Object.values(Language).map((lang) => i18n(TEXT.changeLanguageTitle, lang)).join(' / ')
    }
};
