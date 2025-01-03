import { describe, expect, test } from 'bun:test';
import longestCommonPrefix from './14.solution'


describe('14. Longest Common Prefix', () => {
    test('Example 1', () => {
        const strs = ["flower", "flow", "flight"];

        const codeOutput = longestCommonPrefix(strs);
        const expectedOutput = 'fl';
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const strs = ["dog", "racecar", "car"];

        const codeOutput = longestCommonPrefix(strs);
        const expectedOutput = '';
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const strs = ["", "", ""];

        const codeOutput = longestCommonPrefix(strs);
        const expectedOutput = '';
        expect(codeOutput).toEqual(expectedOutput);
    });
    test.only('Example 4', () => {
        const strs = ["flower", "flower", "flower", "flower"];

        const codeOutput = longestCommonPrefix(strs);
        const expectedOutput = 'flower';
        expect(codeOutput).toEqual(expectedOutput);
    });
    test.only('Example 5', () => {
        const strs = ["", "flower", "flower", "flower"];

        const codeOutput = longestCommonPrefix(strs);
        const expectedOutput = '';
        expect(codeOutput).toEqual(expectedOutput);
    });
    test.only('Example 6', () => {
        const strs = ["flower", "fl", "", ""];

        const codeOutput = longestCommonPrefix(strs);
        const expectedOutput = '';
        expect(codeOutput).toEqual(expectedOutput);
    });
    test.only('Example 7', () => {
        const strs = ["flower", "", "", ""];

        const codeOutput = longestCommonPrefix(strs);
        const expectedOutput = '';
        expect(codeOutput).toEqual(expectedOutput);
    });
    test.only('Example 8', () => {
        const strs = ["flower", "fgd", "ftop", "flow"];

        const codeOutput = longestCommonPrefix(strs);
        const expectedOutput = 'f';
        expect(codeOutput).toEqual(expectedOutput);
    });

});