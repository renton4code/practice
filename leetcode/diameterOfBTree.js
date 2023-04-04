function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Time: O(n), memory O(log(n))
var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    getMaxDepth(root);

    return diameter;

    function getMaxDepth(node) {
        if (!node) return 0;
        const depthRight = getMaxDepth(node.right);
        const depthLeft = getMaxDepth(node.left);
        diameter = Math.max(diameter, depthLeft + depthRight);
        return Math.max(depthRight, depthLeft) + 1;
    }
};

// 5
console.log(
    JSON.stringify(
        diameterOfBinaryTree(
            new TreeNode(1,
                new TreeNode(2,
                    new TreeNode(4,
                        new TreeNode(8)
                    ),
                    new TreeNode(5)
                ),
                new TreeNode(3,
                    new TreeNode(6)
                )
            ),
        )
    )
)
// 7
console.log(
    diameterOfBinaryTree(
        new TreeNode(10,
            new TreeNode(4,
                new TreeNode(3, new TreeNode(2, new TreeNode(1))),
                new TreeNode(5, new TreeNode(6, new TreeNode(7, new TreeNode(8))))
            ),
            new TreeNode(9, new TreeNode(7))
        )
    )
)

