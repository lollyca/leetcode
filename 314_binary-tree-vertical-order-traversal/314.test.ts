import { describe, expect, test } from 'bun:test';
import verticalOrder from './314.solution'

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

describe('314. Binary Tree Vertical Order Traversal', () => {
    test('Example 1', () => {

        const root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);

        const codeOutput = verticalOrder(root);
        const expectedOutput = [[9], [3, 15], [20], [7]];
        expect(codeOutput).toEqual(expectedOutput);
    });
    test('Example 2', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(10);
        root.left.left.right = new TreeNode(5);
        root.left.left.right.right = new TreeNode(6);

        root.right = new TreeNode(3);
        root.right.left = new TreeNode(9);
        root.right.right = new TreeNode(11);

        const codeOutput = verticalOrder(root);
        const expectedOutput = [[4], [2, 5], [1, 10, 9, 6], [3], [11]]
        expect(codeOutput).toEqual(expectedOutput);
    });
});