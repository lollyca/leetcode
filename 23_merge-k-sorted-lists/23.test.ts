import { describe, expect, test } from 'bun:test';
import mergeKLists from './23.solution';

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function arrayToLists(arrays: number[][]): (ListNode | null)[] {
    return arrays.map(arr =>
        arr.reverse().reduce<ListNode | null>((previous, val) => new ListNode(val, previous), null)
    );
}

function arrayToList(arr: number[]): ListNode | null {
    return arr.reverse().reduce<ListNode | null>((previous, val) => new ListNode(val, previous), null);
}

describe('23. Merge k Sorted Lists', () => {
    test('Example 1', () => {
        const list = arrayToLists([[1, 4, 5], [1, 3, 4], [2, 6]]);

        const codeOutput = mergeKLists(list);
        const expectedOutput = arrayToList([1, 1, 2, 3, 4, 4, 5, 6]);
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const list = arrayToLists([]);

        const codeOutput = mergeKLists(list);
        const expectedOutput = arrayToList([]);
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const list = arrayToLists([[]]);

        const codeOutput = mergeKLists(list);
        const expectedOutput = arrayToList([]);
        expect(codeOutput).toEqual(expectedOutput);
    });
});