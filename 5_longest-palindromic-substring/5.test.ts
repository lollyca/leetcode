import { describe, expect, test } from 'bun:test';
import longestPalindrome from './5.solution';

describe('9. Palindrome Number', () => {

    test('Example 1', () => {
        const s = 'babad';

        const codeOutput = longestPalindrome(s)
        const expectedOutput = 'bab';
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const s = 'cbbd';

        const codeOutput = longestPalindrome(s)
        const expectedOutput = 'bb';
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const s = 'a';

        const codeOutput = longestPalindrome(s)
        const expectedOutput = 'a';
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 4', () => {
        const s = 'ab';

        const codeOutput = longestPalindrome(s)
        const expectedOutput = 'a';
        expect(codeOutput).toEqual(expectedOutput);
    });

});