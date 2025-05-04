import { describe, expect, test } from 'bun:test';
import mergeAlternately from './1768.solution'

describe('1768. Minimum Remove to Make Valid Parentheses', () => {
    test('Example 1', () => {
        const word1 = "abc"
        const word2 = "pqr"

        const codeOutput = mergeAlternately(word1, word2);
        const expectedOutput = "apbqcr";
        expect(codeOutput).toEqual(expectedOutput);
    });

    test('Example 2', () => {
        const word1 = "ab"
        const word2 = "pqrs"

        const codeOutput = mergeAlternately(word1, word2);
        const expectedOutput = "apbqrs";
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const word1 = "abcd"
        const word2 = "pq"

        const codeOutput = mergeAlternately(word1, word2);
        const expectedOutput = "apbqcd";
        expect(codeOutput).toEqual(expectedOutput);
    });
});