import { describe, expect, test } from 'bun:test';
import isMatch from './10.solution';


describe('10. Regular Expression Matching', () => {

    test('Example 1', () => {
        const s = 'aa';
        const p = 'a';

        const codeOutput = isMatch(s, p);
        const expectedOutput = false;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const s = 'aa';
        const p = 'a*';

        const codeOutput = isMatch(s, p);
        const expectedOutput = true;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const s = 'ab';
        const p = '.*';

        const codeOutput = isMatch(s, p);
        const expectedOutput = true;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 4', () => {
        const s = 'ab';
        const p = 'a*';

        const codeOutput = isMatch(s, p);
        const expectedOutput = true;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 5', () => {
        const s = 'a';
        const p = 'a*';

        const codeOutput = isMatch(s, p);
        const expectedOutput = true;
        expect(codeOutput).toEqual(expectedOutput);
    });
})