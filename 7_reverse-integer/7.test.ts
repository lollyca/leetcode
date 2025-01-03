import { describe, expect, test } from 'bun:test';
import reverse from './7.solution';

describe('7. Reverse Integer', () => {

    test('Example 1', () => {
        const x = 123;

        const codeOutput = reverse(x);
        const expectedOutput = 321;
        expect(codeOutput).toEqual(expectedOutput);
    });

    test('Example 2', () => {
        const x = -123;

        const codeOutput = reverse(x);
        const expectedOutput = -321;
        expect(codeOutput).toEqual(expectedOutput);
    });

    test('Example 3', () => {
        const x = 120;

        const codeOutput = reverse(x);
        const expectedOutput = 21;
        expect(codeOutput).toEqual(expectedOutput);
    });

    test('Example 4', () => {
        const x = 1534236469;

        const codeOutput = reverse(x);
        const expectedOutput = 0;
        expect(codeOutput).toEqual(expectedOutput);
    });
})