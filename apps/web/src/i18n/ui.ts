import type {I18N} from "./i18n";

type Texts = Record<string, I18N>

export const TEXT: Texts = {
    comicsHeading: {
        en: 'The Jutas Project',
        se: 'Projektet Jutas'
    },
    changeLanguageLabel: {
        en: 'Change Language',
        se: 'Byt språk'
    },
    paginationLabel: {
        en: 'Pagination',
        se: 'Paginering'
    },
    changeLanguageTitle: {
        en: 'Change the language of the website',
        se: 'Byt språk på webbplatsen'
    },
    language: {
        en: 'English',
        se: 'Svenska'
    }
}