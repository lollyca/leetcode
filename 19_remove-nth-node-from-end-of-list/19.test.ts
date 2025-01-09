import { describe, expect, test } from 'bun:test';
import removeNthFromEnd from './19.solution';

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    };
};

describe('19. Remove Nth Node From End of List', () => {
    test('Example 1', () => {
        const newNode5 = new ListNode(5)
        const newNode4 = new ListNode(4, newNode5)
        const newNode3 = new ListNode(3, newNode4)
        const newNode2 = new ListNode(2, newNode3)
        const newNode = new ListNode(1, newNode2)
        const n = 2;

        const codeOutput = removeNthFromEnd(newNode, n);
        const expectedOutput = newNode;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const newNode = new ListNode(1);
        const n = 1;

        const codeOutput = removeNthFromEnd(newNode, n);
        const expectedOutput = null;
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 3', () => {
        const newNode2 = new ListNode(2);
        const newNode = new ListNode(1, newNode2);
        const n = 1;

        const codeOutput = removeNthFromEnd(newNode, n);
        const expectedOutput = newNode;
        expect(codeOutput).toEqual(expectedOutput);
    });
});