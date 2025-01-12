import { describe, expect, test } from 'bun:test';
import isValid from './20.solution';

describe('20. Valid Parentheses', () => {
    test('Example 1', () => {
        const input = "()";

        const codeOutput = isValid(input);
        const expectedOutput = true;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const input = "()[]{}";

        const codeOutput = isValid(input);
        const expectedOutput = true
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const input = "(]";


        const codeOutput = isValid(input);
        const expectedOutput = false;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 4', () => {
        const input = "([])";

        const codeOutput = isValid(input);
        const expectedOutput = true;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 5', () => {
        const input = "(}{)";

        const codeOutput = isValid(input);
        const expectedOutput = false;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 6', () => {
        const input = "([}}])";

        const codeOutput = isValid(input);
        const expectedOutput = false;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 7', () => {
        const input = "()))";

        const codeOutput = isValid(input);
        const expectedOutput = false;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 8', () => {
        const input = "(([]){})";

        const codeOutput = isValid(input);
        const expectedOutput = true;
        expect(codeOutput).toEqual(expectedOutput);
    });
});