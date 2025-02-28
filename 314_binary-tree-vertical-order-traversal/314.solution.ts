//   Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export default function verticalOrder(root: TreeNode | null): number[][] {
    let obj: Record<string, [number, number][]> = {};

    function visit(node: TreeNode | null, x: number, y: number) {
        if (!node) {
            return;
        }

        if (!obj[x]) {
            obj[x] = []
        }
        obj[x].push([node.val, y]);

        visit(node.left, x - 1, y + 1);
        visit(node.right, x + 1, y + 1);
    }

    visit(root, 0, 0);
    // console.log(obj);

    // console.log(Object.entries(obj));

    const sortedObj = Object.entries(obj).sort((a, b) => {
        // Sort the values as well - *or a seperate loop if your brain can't parse :)
        // a[1].sort((e1, e2) => e1[1] - e2[1]);
        // b[1].sort((e1, e2) => e1[1] - e2[1]);

        return parseInt(a[0]) - parseInt(b[0]);
    });
    //console.log(sortedObj)

    //* my brain can't parse :)
    for (const entry of sortedObj) {
        entry[1].sort((a, b) => a[1] - b[1]);
    }

    const results: number[][] = [];
    for (const [key, values] of sortedObj) {
        const value = values.map(x => x[0]);
        results.push(value);
    }

    return results;
};

// const root = new TreeNode(3);
// root.left = new TreeNode(9);
// root.right = new TreeNode(20);
// root.right.left = new TreeNode(15);
// root.right.right = new TreeNode(7);
// verticalOrder(root);

// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);

// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(10);
// root.right.left = new TreeNode(9);
// root.right.right = new TreeNode(11);

// root.left.left.right = new TreeNode(5);
// root.left.left.right.right = new TreeNode(6);
// verticalOrder(root);