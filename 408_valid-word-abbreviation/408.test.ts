import { describe, test, expect } from 'bun:test';
import validWordAbbreviation from './408.solution';

describe('408. Valid Word Abbreviation', () => {
    test('Example 1', () => {
        const word = "internationalization"
        const abbr = "i12iz4n"

        const codeOutput = validWordAbbreviation(word, abbr);
        const expectedOutput = true;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const word = "apple";
        const abbr = "a2e";

        const codeOutput = validWordAbbreviation(word, abbr);
        const expectedOutput = false;
        expect(codeOutput).toEqual(expectedOutput);
    })
})