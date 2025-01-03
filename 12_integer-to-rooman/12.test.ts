import { describe, expect, test } from 'bun:test';
import intToRoman from './12.solution';

describe('12. Integer to Roman', () => {

    test('Example 1', () => {
        const num = 3749;

        const codeOutput = intToRoman(num);
        const expectedOutput = "MMMDCCXLIX"
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const num = 58;

        const codeOutput = intToRoman(num);
        const expectedOutput = "LVIII";
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const num = 1994;

        const codeOutput = intToRoman(num);
        const expectedOutput = "MCMXCIV";
        expect(codeOutput).toEqual(expectedOutput);
    });

});