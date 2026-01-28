import type {LayoutLoad} from './$types';
import type {LanguageType} from "@library/types";

export const load: LayoutLoad = ({params}): { lang: LanguageType } => {
    return {
        lang: params.lang
    };
};