import { describe, expect, test } from 'bun:test';
import addTwoNumbers from './2.solution';

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

describe('2. Add Two Numbers', () => {

    test('Example 1', () => {

        const node3 = new ListNode(3);
        const node2 = new ListNode(4, node3);
        const node1 = new ListNode(2, node2);

        const nodeC = new ListNode(4);
        const nodeB = new ListNode(6, nodeC);
        const nodeA = new ListNode(5, nodeB);

        const output = addTwoNumbers(node1, nodeA);
        expect(output?.val).toEqual(node1.val + nodeA.val);
        expect(output?.next?.val).toEqual(node2.val + nodeB.val);
        expect(output?.next?.next?.val).toEqual(node3.val + nodeC.val);

    });

});