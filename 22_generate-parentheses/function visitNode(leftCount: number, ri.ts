function visitNode(leftCount: number, rightCount: number, n: number) {
    // can we add a left
    if (leftCount < n) {
        // TODO: add left node
        visitNode(leftCount + 1, rightCount, n);
    }

    // can we add a right
    if (rightCount < leftCount) {
        // TODO: add right node
        visitNode(leftCount, rightCount + 1, n);
    }
}