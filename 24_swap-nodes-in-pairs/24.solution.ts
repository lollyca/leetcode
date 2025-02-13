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




export default function swapPairs(head: ListNode | null): ListNode | null {
    let wasSwapped = false;
    function swapTwo(A: ListNode | null, B: ListNode | null) {
        if (!A || !B) {
            return A;
        }

        if (!wasSwapped) {
            // temp = node.next.next
            // a = node
            // b = node.next
            const temp = B.next;
            B.next = A;
            A.next = temp;

            wasSwapped = true;

            return B;
        } else {
            wasSwapped = false;
            return A;
        }
    }



    let node = head;
    let counter = 0;
    let previousNode = null;

    while (node) {
        // console.log(node.val);

        const newB = swapTwo(node, node.next);
        if (counter === 0) {
            head = newB;
        }


        if (previousNode != null) {
            previousNode.next = newB;
        }


        //prepare for the next round (DO NOT TOUCH)
        counter++;
        node = newB?.next;
        previousNode = newB;
    }

    return head;

};


const head = arrayToList([1, 2, 3]);
swapPairs(head);
