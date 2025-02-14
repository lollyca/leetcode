import { arrayToList, listToArray } from '../functions/support'
let bum = listToArray(null);

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverse(start: ListNode | null, end: number) {
    let current = start;
    let previousNode: ListNode | null = null;
    let count = 0;

    while (current && count < end) {
        const newNode: ListNode | null = new ListNode(current.val, previousNode);

        previousNode = newNode;
        current = current.next;
        count++;
    }
    if (count === end) {
        return previousNode;
    } else { return start }
}

function findTail(linkedList: ListNode | null) {
    while (linkedList?.next) {
        linkedList = linkedList.next
    }
    return linkedList;
}

export default function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let result: ListNode | null = null;
    let node = head;
    let count = k;

    while (node) {

        if (count == k) {
            const reversed = reverse(node, k);
            count = 0;

            if (!result) {
                result = reversed;
            } else {
                const tail = findTail(result);
                tail.next = reversed;
            }

        }



        node = node.next;
        count++;
    }

    console.log(listToArray(result).reverse())

    return result

};

const head = arrayToList([1, 2, 3, 4, 5]);
const reversed = reverseKGroup(head, 3);
console.log(reversed);