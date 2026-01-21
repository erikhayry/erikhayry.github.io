import type {I18N} from "./i18n";

type Texts = Record<string, I18N>

export const TEXT: Texts = {
    comicsHeading: {
        en: 'The Jutas Project',
        se: 'Projektet Jutas'
    },
    paginationLabel: {
        en: 'Pagination',
        se: 'Paginering'
    }
}