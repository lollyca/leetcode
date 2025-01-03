import { describe, expect, test } from 'bun:test';
import lengthOfLongestSubstring from './3.solution';

describe('3. Longest Substring Without Repeating Characters', () => {

    test('Example 1', () => {
        const s = "abcabcbb";

        const codeOutput = lengthOfLongestSubstring(s)
        const expectedOutput = 3;
        expect(codeOutput).toEqual(expectedOutput);
    });

    test('Example 2', () => {
        const s = "bbbbbb";

        const codeOutput = lengthOfLongestSubstring(s)
        const expectedOutput = 1;
        expect(codeOutput).toEqual(expectedOutput);
    });

    test('Example 3', () => {
        const s = "pwwkew";

        const codeOutput = lengthOfLongestSubstring(s)
        const expectedOutput = 3;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 4', () => {
        const s = "au";

        const codeOutput = lengthOfLongestSubstring(s)
        const expectedOutput = 2;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 5', () => {
        const s = "cdd";

        const codeOutput = lengthOfLongestSubstring(s)
        const expectedOutput = 2;
        expect(codeOutput).toEqual(expectedOutput);
    });
});