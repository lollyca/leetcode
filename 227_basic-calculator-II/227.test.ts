import { describe, expect, test } from 'bun:test';
import calculate from './227.solution';

describe('227. Basic Calculator II', () => {
    test('Example 1', () => {
        const s = "3+2*2"

        const codeOutput = calculate(s);
        const expectedOutput = 7;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const s = " 3/2 "

        const codeOutput = calculate(s);
        const expectedOutput = 1;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const s = " 3+5 / 2 "

        const codeOutput = calculate(s);
        const expectedOutput = 5;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const s = "42"

        const codeOutput = calculate(s);
        const expectedOutput = 42;
        expect(codeOutput).toEqual(expectedOutput);
    });
});