import { describe, expect, test } from 'bun:test';
import removeDuplicates from './26.solution';

describe('26. Remove Duplicates from Sorted Array', () => {
    test('Example 1', () => {
        const nums = [1, 1, 2];

        const codeOutput = removeDuplicates(nums);
        const expectedOutput = 2;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

        const codeOutput = removeDuplicates(nums);
        const expectedOutput = 5;
        expect(codeOutput).toEqual(expectedOutput);
    });
});