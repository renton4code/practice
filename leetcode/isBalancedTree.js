function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Time: O(n*log(n)), memory: O(n)
var isBalanced = function (root) {
    let queue = [root];
    while (queue.length) {
        const current = queue.shift()
        if (current) {
            if (isImbalanced(current)) return false;
            queue.push(current.left);
            queue.push(current.right);
        }
    }
    return true;

    function isImbalanced(node) {
        const hRight = maxDepth(node.right);
        const hLeft = maxDepth(node.left);
        return Math.abs(hRight - hLeft) > 1;
    }

    function maxDepth(node, h = 0) {
        if (!node) return h;
        return Math.max(maxDepth(node.right, h + 1), maxDepth(node.left, h + 1));
    }
};
// true
console.log(
    JSON.stringify(
        isBalanced(
            new TreeNode(1,
                new TreeNode(2,
                    new TreeNode(4, new TreeNode(8)),
                    new TreeNode(5)
                ),
                new TreeNode(3,
                    new TreeNode(6),
                )
            )
        )
    )
)
// false
console.log(
    JSON.stringify(
        isBalanced(
            new TreeNode(4,
                new TreeNode(2,
                    new TreeNode(1),
                    new TreeNode(3)
                ),
            )
        )
    )
)