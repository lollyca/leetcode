import { describe, expect, test } from 'bun:test';
import removeElement from './27.solution';

describe('26. Remove Duplicates from Sorted Array', () => {
    test('Example 1', () => {
        const nums = [3, 2, 2, 3]
        const val = 3

        const codeOutput = removeElement(nums, val);
        const expectedOutput = 2;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2];
        const val = 2;

        const codeOutput = removeElement(nums, val);
        const expectedOutput = 5;
        expect(codeOutput).toEqual(expectedOutput);
    });
});