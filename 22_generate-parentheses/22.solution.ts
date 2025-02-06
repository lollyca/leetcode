class NodeElement {
    value: string;
    left: NodeElement | null;
    right: NodeElement | null;
    constructor(value: string) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root: NodeElement;
    constructor(rootValue: string) {
        this.root = new NodeElement(rootValue);
    }
}

export default function generateParenthesis(n: number): string[] {
    let results: string[] = [];
    let tree = new BinarySearchTree('(');

    function visitNode(leftCount: number, rightCount: number, n: number, previous: NodeElement) {

        // can we add a left
        if (leftCount < n) {
            // TODO: add left node
            let newNode = new NodeElement(previous.value + '(');
            previous.left = newNode;
            visitNode(leftCount + 1, rightCount, n, newNode);
        }

        // can we add a right
        if (rightCount < leftCount) {
            // TODO: add right node
            let newNode = new NodeElement(previous.value + ')');
            previous.right = newNode;
            visitNode(leftCount, rightCount + 1, n, newNode);
        }
        if (previous.value.length === 2 * n) {
            results.push(previous.value);
        }
    }

    visitNode(1, 0, n, tree.root);

    console.log(results);
    return results;

};

generateParenthesis(3);

