import { describe, expect, test } from 'bun:test';
import gcdOfStrings from './1071.solution'

describe('1249. Minimum Remove to Make Valid Parentheses', () => {
    test('Example 1', () => {
        const str1 = "ABCABC"
        const str2 = "ABC"

        const codeOutput = gcdOfStrings(str1, str2);
        const expectedOutput = "ABC";
        expect(codeOutput).toEqual(expectedOutput);
    });

    test('Example 2', () => {
        const str1 = "ABABAB"
        const str2 = "ABAB"

        const codeOutput = gcdOfStrings(str1, str2);
        const expectedOutput = "AB";
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const str1 = "LEET"
        const str2 = "CODE"

        const codeOutput = gcdOfStrings(str1, str2);
        const expectedOutput = "";
        expect(codeOutput).toEqual(expectedOutput);
    });
});