import { describe, expect, test } from 'bun:test';
import reverseKGroup from './25.solution';
import { arrayToList } from '../functions/support'

describe('25. Reverse Nodes in k-Group', () => {
    test('Example 1', () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        const k = 2;

        const codeOutput = reverseKGroup(head, k);
        const expectedOutput = arrayToList([2, 1, 4, 3, 5]);
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        const k = 3;

        const codeOutput = reverseKGroup(head, k);
        const expectedOutput = arrayToList([3, 2, 1, 4, 5]);
        expect(codeOutput).toEqual(expectedOutput);
    });
});