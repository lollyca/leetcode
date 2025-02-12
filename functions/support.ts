class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function arrayToLists(arrays: number[][]): (ListNode | null)[] {
    return arrays.map(arr =>
        arr.reverse().reduce<ListNode | null>((previous, val) => new ListNode(val, previous), null)
    );
}

export function arrayToList(arr: number[]): ListNode | null {
    return arr.reverse().reduce<ListNode | null>((previous, val) => new ListNode(val, previous), null);
}