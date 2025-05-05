import { describe, expect, test } from 'bun:test';
import kidsWithCandies from './1431.solution'

describe('1768. Minimum Remove to Make Valid Parentheses', () => {
    test('Example 1', () => {
        const candies = [2, 3, 5, 1, 3];
        const extraCandies = 3;


        const codeOutput = kidsWithCandies(candies, extraCandies);
        const expectedOutput = [true, true, true, false, true];
        expect(codeOutput).toEqual(expectedOutput);
    });

    test('Example 2', () => {
        const candies = [4, 2, 1, 1, 2];
        const extraCandies = 1;


        const codeOutput = kidsWithCandies(candies, extraCandies);
        const expectedOutput = [true, false, false, false, false];
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const candies = [12, 1, 12];
        const extraCandies = 10;


        const codeOutput = kidsWithCandies(candies, extraCandies);
        const expectedOutput = [true, false, true];
        expect(codeOutput).toEqual(expectedOutput);
    });
});