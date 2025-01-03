import { describe, expect, test } from 'bun:test';
import myAtoi from './8.solution';

describe('8. String to Integer (atoi)', () => {

    test('Example 1', () => {
        const s = '42';

        const codeOutput = myAtoi(s);
        const expectedOutput = 42;
        expect(codeOutput).toEqual(expectedOutput);
    });

    test('Example 2', () => {
        const s = ' -042';

        const codeOutput = myAtoi(s);
        const expectedOutput = -42;
        expect(codeOutput).toEqual(expectedOutput);
    });

    test('Example 3', () => {
        const s = '1337c0d3';

        const codeOutput = myAtoi(s);
        const expectedOutput = 1337;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 4', () => {
        const s = 'words and 987';

        const codeOutput = myAtoi(s);
        const expectedOutput = 0;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 5', () => {
        const s = '+-12';

        const codeOutput = myAtoi(s);
        const expectedOutput = 0;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 6', () => {
        const s = '3.14159';

        const codeOutput = myAtoi(s);
        const expectedOutput = 3;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 7', () => {
        const s = '+';

        const codeOutput = myAtoi(s);
        const expectedOutput = 0;
        expect(codeOutput).toEqual(expectedOutput);
    });


})