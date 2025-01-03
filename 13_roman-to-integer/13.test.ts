import { describe, expect, test } from 'bun:test';
import romanToInt from './13.solution';

describe('13. Roman to Integer', () => {
    test('Example 1', () => {
        const s = 'III';

        const codeOutput = romanToInt(s);
        const expectedOutput = 3;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const s = 'LVIII';

        const codeOutput = romanToInt(s);
        const expectedOutput = 58;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const s = 'MCMXCIV';

        const codeOutput = romanToInt(s);
        const expectedOutput = 1994;
        expect(codeOutput).toEqual(expectedOutput);
    });

});