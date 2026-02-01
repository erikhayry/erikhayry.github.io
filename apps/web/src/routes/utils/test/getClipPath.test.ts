import {describe, expect, test} from "vitest";
import {getClipPath} from "../getClipPath";

describe('getClipPath', () => {
    describe('3 items', () => {
        test('should return correct clip path for first index', () => {
            expect(getClipPath(0, 3)).toBe('polygon(0% 0%, 33.333% 0%, 23.333% 100%, 0% 100%)');
        });
        test('should return correct clip path for middle index', () => {
            expect(getClipPath(1, 3)).toBe('polygon(33.333% 0%, 66.666% 0%, 56.666% 100%, 23.333% 100%)');
        });
        test('should return correct clip path for last index', () => {
            expect(getClipPath(2, 3)).toBe('polygon(66.666% 0%, 100% 0%, 100% 100%, 56.666% 100%)');
        });
    });

    describe('4 items', () => {
        test('should return correct clip path for first index', () => {
            expect(getClipPath(0, 4)).toBe('polygon(0% 0%, 25% 0%, 15% 100%, 0% 100%)');
        });
        test('should return correct clip path for 2 index', () => {
            expect(getClipPath(1, 4)).toBe('polygon(25% 0%, 50% 0%, 40% 100%, 15% 100%)');
        });
        test('should return correct clip path for 3 index', () => {
            expect(getClipPath(2, 4)).toBe('polygon(50% 0%, 75% 0%, 65% 100%, 40% 100%)');
        });
        test('should return correct clip path for last index', () => {
            expect(getClipPath(3, 4)).toBe('polygon(75% 0%, 100% 0%, 100% 100%, 65% 100%)');
        });
    });
})