import { describe, expect, test } from 'bun:test';
import twoSum from './1.solution';

describe('1. Two Sum', () => {

    test('Example 1', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;

        const codeOutput = twoSum(nums, target);
        const expectedOutput = [0, 1];
        expect(codeOutput).toEqual(expectedOutput);
    });

    test('Example 2', () => {
        const nums = [3, 2, 4];
        const target = 6;

        const codeOutput = twoSum(nums, target);
        const expectedOutput = [1, 2];
        expect(codeOutput).toEqual(expectedOutput);
    });

    test('other test', () => {
        const nums = [3, 2, 3];
        const target = 6;

        const codeOutput = twoSum(nums, target);
        const expectedOutput = [0, 2];
        expect(codeOutput).toEqual(expectedOutput);
    });
});