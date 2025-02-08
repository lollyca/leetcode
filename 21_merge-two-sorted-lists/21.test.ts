import { describe, expect, test } from 'bun:test';
import mergeTwoLists from './21.solution';

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function arrayToList(arr: number[]): ListNode | null {
    return arr.reverse().reduce<ListNode | null>((previous, val) => new ListNode(val, previous), null);
}


describe('21. Merge Two Sorted Lists', () => {
    test('Example 1', () => {
        const list1 = arrayToList([1, 2, 4]);
        const list2 = arrayToList([1, 3, 4]);

        const codeOutput = mergeTwoLists(list1, list2);
        const expectedOutput = arrayToList([1, 1, 2, 3, 4, 4]);
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const list1 = arrayToList([]);
        const list2 = arrayToList([]);

        const codeOutput = mergeTwoLists(list1, list2);
        const expectedOutput = arrayToList([]);
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const list1 = arrayToList([]);
        const list2 = arrayToList([0]);

        const codeOutput = mergeTwoLists(list1, list2);
        const expectedOutput = arrayToList([0]);
        expect(codeOutput).toEqual(expectedOutput);
    });
});