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




export default function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    // Filter out null or empty lists
    lists = lists.filter(list => list !== null);
    if (lists.length === 0) return null; // If all were empty, return null

    let allNumbers = [];

    for (let i = 0; i < lists.length; i++) {
        let currentHead = lists[i];
        while (currentHead?.val != null || currentHead?.val != undefined) {
            allNumbers.push(currentHead.val);
            currentHead = currentHead.next;
        }
    }
    allNumbers.sort((a, b) => a - b)
    console.log(allNumbers);

    const head = new ListNode(allNumbers[0]);
    let tempNode = head;
    for (let x = 1; x < allNumbers.length; x++) {
        let currentValue = allNumbers[x];
        let newNode = new ListNode(currentValue);
        tempNode.next = newNode;
        tempNode = tempNode.next;
    }
    return head;
};


let input = [[0, 2, 5]];
const lists = arrayToLists(input);
mergeKLists(lists);