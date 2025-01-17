class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const l1Node3 = new ListNode(4)
const l1Node2 = new ListNode(2, l1Node3)
const l1Node1 = new ListNode(1, l1Node2)

const l2Node3 = new ListNode(4)
const l2Node2 = new ListNode(3, l2Node3)
const l2Node1 = new ListNode(1, l2Node2)


export default function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    let headL1 = list1;
    let headL2 = list2;
    let merged = null;

    while ((headL1 || headL2)) {

        let newVal = 0;

        //check who has the smallest val
        if (headL1 && headL2) {
            if (headL1?.val <= headL2?.val) {
                newVal = headL1?.val;
                headL1 = headL1?.next;
            } else if (headL1?.val > headL2?.val) {
                newVal = headL2?.val;
                headL2 = headL2?.next;

            }
        } else if (headL1 && !headL2) {
            newVal = headL1.val;
            headL1 = headL1?.next;
        } else if (!headL1 && headL2) {
            newVal = headL2?.val;
            headL2 = headL2?.next;
        } else if (!headL1 && !headL2) {
            console.log('you are done!');
            break;
        }
        const newNode = new ListNode(newVal, null)
        if (!merged) {
            merged = newNode;
        } else {
            let temp = merged;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }

    return merged;
};

//Input: list1 = [1,2,4], list2 = [1,3,4]
//Output: [1, 1, 2, 3, 4, 4]
mergeTwoLists(l1Node1, l2Node1)



function listToArray(list: ListNode | null): number[] {
    const result: number[] = [];
    let current = list;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result.reverse();
}