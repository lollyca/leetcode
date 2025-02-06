import { describe, expect, test } from 'bun:test';
import generateParenthesis from './22.solution';

describe('22. Generate Parentheses', () => {
    test('Example 1', () => {
        const n = 3

        const codeOutput = generateParenthesis(n);
        const expectedOutput = ["((()))", "(()())", "(())()", "()(())", "()()()"];
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const n = 1

        const codeOutput = generateParenthesis(n);
        const expectedOutput = ["()"];
        expect(codeOutput).toEqual(expectedOutput);
    });
});