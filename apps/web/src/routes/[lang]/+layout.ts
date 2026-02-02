import type {LanguageType} from "@library/types";

interface Props {
    params: {
        lang: LanguageType;
    }
}

type Load = ({params}: Props) => { lang: LanguageType }

interface Data {
    lang: LanguageType;
}

export const load: Load = ({params}: Props): Data => {
    return {
        lang: params.lang,
    };
};