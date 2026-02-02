import {describe, expect, it} from 'vitest';
import {load} from '../+layout';
import {Language} from "@library/types";

describe('+layout.ts', () => {
    it('should return lang from params', () => {
        const params = {lang: Language.EN};
        const result = load({params});

        expect(result).toEqual({lang: Language.EN});
    });

    it('should handle Swedish language', () => {
        const params = {lang: Language.SE};
        const result = load({params});

        expect(result).toEqual({lang: Language.SE});
    });

    it('should pass through the lang parameter unchanged', () => {
        const params = {lang: Language.EN};
        const result = load({params});

        expect(result.lang).toBe(params.lang);
    });
});
