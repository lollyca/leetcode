import { describe, expect, test } from 'bun:test';
import threeSumClosest from './16.solution';

describe('16. 3Sum Closest', () => {
    test('Example 1', () => {
        const nums = [-1, 2, 1, -4];
        const target = 1;

        const codeOutput = threeSumClosest(nums, target);
        const expectedOutput = 2;
        expect(codeOutput).toEqual(expectedOutput);
    });

    test('Example 2', () => {
        const nums = [0, 0, 0];
        const target = 1;

        const codeOutput = threeSumClosest(nums, target);
        const expectedOutput = 0;
        expect(codeOutput).toEqual(expectedOutput);
    });


});