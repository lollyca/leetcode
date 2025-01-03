import { describe, expect, test } from 'bun:test';
import threeSum from './15.solution'


describe('15. 3Sum', () => {
    test('Example 1', () => {
        const nums = [-1, 0, 1, 2, -1, -4];

        const codeOutput = threeSum(nums);
        const expectedOutput = [[-1, 0, 1], [-1, 2, -1]];
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const nums = [0, 1, 1];

        const codeOutput = threeSum(nums);
        const expectedOutput: number[][] = [];
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const nums = [0, 0, 0];

        const codeOutput = threeSum(nums);
        const expectedOutput = [[0, 0, 0]];
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 4', () => {
        const nums = [0, 0, 0, 0];

        const codeOutput = threeSum(nums);
        const expectedOutput = [[0, 0, 0]];
        expect(codeOutput).toEqual(expectedOutput);
    });

});