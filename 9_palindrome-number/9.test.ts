import { describe, expect, test } from 'bun:test';
import isPalindrome from './9.solution';

describe('9. Palindrome Number', () => {

    test('Example 1', () => {
        const num = 121;

        const codeOutput = isPalindrome(num)
        const expectedOutput = true;
        expect(codeOutput).toEqual(expectedOutput);
    });

    test('Example 2', () => {
        const num = -121;

        const codeOutput = isPalindrome(num)
        const expectedOutput = false;
        expect(codeOutput).toEqual(expectedOutput);
    });

    test('Example 3', () => {
        const num = 10;

        const codeOutput = isPalindrome(num)
        const expectedOutput = false;
        expect(codeOutput).toEqual(expectedOutput);
    });

    test('Single digit', () => {
        const num = 1;

        const codeOutput = isPalindrome(num)
        const expectedOutput = true;
        expect(codeOutput).toEqual(expectedOutput);
    });

});