class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    };
};
// const newNode5 = new ListNode(5)
// const newNode4 = new ListNode(4, newNode5)
// const newNode3 = new ListNode(3, newNode4)
// const newNode2 = new ListNode(2, newNode3)
// const newNode = new ListNode(1, newNode2)

//const newNode = new ListNode(1)

const newNode2 = new ListNode(2);
const newNode = new ListNode(1, newNode2);


export default function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

    let currentNode = head;
    let count = 1;

    while (currentNode?.next) {
        currentNode = currentNode.next;
        count++;
        if (!currentNode.next) {
            // end deshou?
            break;
        };
    };

    let end = count - n;
    let firstNode = head;
    let previous = firstNode;

    if (count > 1) {
        if (end === 0) {
            head = firstNode?.next || null;
        } else {
            for (let i = 0; i < end; i++) {
                if (firstNode?.next) {
                    previous = firstNode
                    firstNode = firstNode.next
                }
            }
        }
        if (previous) {
            previous.next = firstNode?.next || null;
        }
        return head;
    } else {
        return null
    }
};

const n = 2;
removeNthFromEnd(newNode, n)