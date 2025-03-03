import { describe, expect, test } from 'bun:test';
import minRemoveToMakeValid from './1249.solution'

describe('1249. Minimum Remove to Make Valid Parentheses', () => {
    test('Example 1', () => {
        const s = "lee(t(c)o)de)"

        const codeOutput = minRemoveToMakeValid(s);
        const expectedOutput = "lee(t(co)de)";
        expect(codeOutput).toEqual(expectedOutput);
    });

    test('Example 2', () => {
        const s = "a)b(c)d"

        const codeOutput = minRemoveToMakeValid(s);
        const expectedOutput = "ab(c)d";
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const s = "))(("

        const codeOutput = minRemoveToMakeValid(s);
        const expectedOutput = "";
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 4', () => {
        const s = ")))))"

        const codeOutput = minRemoveToMakeValid(s);
        const expectedOutput = "";
        expect(codeOutput).toEqual(expectedOutput);
    });

});