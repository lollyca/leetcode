import { describe, expect, test } from 'bun:test';
import letterCombinations from './17.solution';

describe('17. Letter Combinations of a Phone Number', () => {
    test('Example 1', () => {
        const digits = '23';

        const codeOutput = letterCombinations(digits);
        const expectedOutput = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
        expect(codeOutput).toEqual(expectedOutput);
    });

    test('Example 2', () => {
        const digits = '';

        const codeOutput = letterCombinations(digits);
        const expectedOutput: string[] = [];
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const digits = '2';

        const codeOutput = letterCombinations(digits);
        const expectedOutput = ["a", "b", "c"];
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 4', () => {
        const digits = '234';

        const codeOutput = letterCombinations(digits);
        const expectedOutput = ["adg", "adh", "adi", "aeg", "aeh", "aei", "afg", "afh", "afi", "bdg", "bdh", "bdi", "beg", "beh", "bei", "bfg", "bfh", "bfi", "cdg", "cdh", "cdi", "ceg", "ceh", "cei", "cfg", "cfh", "cfi"];
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 5', () => {
        const digits = '5678';

        const codeOutput = letterCombinations(digits);
        const expectedOutput = ["jmpt", "jmpu", "jmpv", "jmqt", "jmqu", "jmqv", "jmrt", "jmru", "jmrv", "jmst", "jmsu", "jmsv", "jnpt", "jnpu", "jnpv", "jnqt", "jnqu", "jnqv", "jnrt", "jnru", "jnrv", "jnst", "jnsu", "jnsv", "jopt", "jopu", "jopv", "joqt", "joqu", "joqv", "jort", "joru", "jorv", "jost", "josu", "josv", "kmpt", "kmpu", "kmpv", "kmqt", "kmqu", "kmqv", "kmrt", "kmru", "kmrv", "kmst", "kmsu", "kmsv", "knpt", "knpu", "knpv", "knqt", "knqu", "knqv", "knrt", "knru", "knrv", "knst", "knsu", "knsv", "kopt", "kopu", "kopv", "koqt", "koqu", "koqv", "kort", "koru", "korv", "kost", "kosu", "kosv", "lmpt", "lmpu", "lmpv", "lmqt", "lmqu", "lmqv", "lmrt", "lmru", "lmrv", "lmst", "lmsu", "lmsv", "lnpt", "lnpu", "lnpv", "lnqt", "lnqu", "lnqv", "lnrt", "lnru", "lnrv", "lnst", "lnsu", "lnsv", "lopt", "lopu", "lopv", "loqt", "loqu", "loqv", "lort", "loru", "lorv", "lost", "losu", "losv"];
        expect(codeOutput).toEqual(expectedOutput);
    });

});