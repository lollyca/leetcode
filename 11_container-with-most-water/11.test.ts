import { describe, expect, test } from 'bun:test';
import maxArea from './11.solution';

describe('11. Container With Most Water', () => {

    test('Example 1', () => {
        const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

        const codeOutput = maxArea(height);
        const expectedOutput = 49;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const height = [1, 1];

        const codeOutput = maxArea(height);
        const expectedOutput = 1;
        expect(codeOutput).toEqual(expectedOutput);
    });

})