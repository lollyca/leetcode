
//Definition for singly - linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


export default function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let returnNode: ListNode | null = null;
    let carry = 0;
    let temp: ListNode | null = null; // Use this to track the last node appended

    while (l1 !== null || l2 !== null || carry !== 0) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;

        // Update carry for next iteration - This line calculates how much to carry over for the next iteration
        carry = Math.floor(sum / 10);

        // Create a new node with the digit - This takes the remainder of sum when divided by 10 (sum = 12, then sum % 10 = 2x )
        const newNode = new ListNode(sum % 10);

        if (!returnNode) {
            // Initialize the returnNode as the first node
            returnNode = newNode;
            temp = returnNode; // Temp points to the first node
        } else {
            // Append the new node to the end of the list
            temp!.next = newNode;
            temp = temp!.next; // Move temp to point to the new node
        }

        // Move to the next node in l1 and l2
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return returnNode;
}

const l111 = new ListNode(3, null)
const l11 = new ListNode(4, l111);
const l1 = new ListNode(2, l11);

const l222 = new ListNode(4, null);
const l22 = new ListNode(6, l222);
const l2 = new ListNode(5, l22);

const seraOMG = addTwoNumbers(l1, l2);
console.log(seraOMG)



/*
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/
