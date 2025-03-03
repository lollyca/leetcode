import { describe, expect, test } from 'bun:test';
import subarraySum from './560.solution';

describe('26. Remove Duplicates from Sorted Array', () => {
    test('Example 1', () => {
        const nums = [1, 1, 1]
        const k = 2

        const codeOutput = subarraySum(nums, k);
        const expectedOutput = 2;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const nums = [1, 2, 3]
        const k = 3

        const codeOutput = subarraySum(nums, k);
        const expectedOutput = 2;
        expect(codeOutput).toEqual(expectedOutput);
    });
});