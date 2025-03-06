import { describe, test, expect } from 'bun:test';
import validPalindrome from './680.solution';

describe('680. Valid Palindrome II', () => {
    test('Example 1', () => {
        const s = "aba";

        const codeOutput = validPalindrome(s);
        const expectedOutput = true;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const s = "abca";

        const codeOutput = validPalindrome(s);
        const expectedOutput = true;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const s = "abc";

        const codeOutput = validPalindrome(s);
        const expectedOutput = false;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 4', () => {
        const s = "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga";

        const codeOutput = validPalindrome(s);
        const expectedOutput = true;
        expect(codeOutput).toEqual(expectedOutput);
    });
})