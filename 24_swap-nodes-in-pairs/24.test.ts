import { describe, expect, test } from 'bun:test';
import swapPairs from './24.solution';
import { arrayToList } from '../functions/support'

describe('24. Swap Nodes in Pairs', () => {
    test('Example 1', () => {
        const head = arrayToList([1, 2, 3, 4]);

        const codeOutput = swapPairs(head);
        const expectedOutput = arrayToList([2, 1, 4, 3]);
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const head = arrayToList([]);

        const codeOutput = swapPairs(head);
        const expectedOutput = arrayToList([]);
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const head = arrayToList([1]);

        const codeOutput = swapPairs(head);
        const expectedOutput = arrayToList([1]);
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 4', () => {
        const head = arrayToList([1, 2, 3]);

        const codeOutput = swapPairs(head);
        const expectedOutput = arrayToList([2, 1, 3]);
        expect(codeOutput).toEqual(expectedOutput);
    });
});