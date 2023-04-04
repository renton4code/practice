function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// recursive top down, time: O(n), memory: O(H) - memory for call stack
var invertTree = function (root) {
    if (!root) return root;
    visitNode(root);
    return root;
    function visitNode(node) {
        [node.right, node.left] = [node.left, node.right];
        if (node.right) visitNode(node.right);
        if (node.left) visitNode(node.left);
    }
};

console.log(
    JSON.stringify(
        invertTree(
            new TreeNode(4,
                new TreeNode(2,
                    new TreeNode(1),
                    new TreeNode(3)
                ),
                new TreeNode(7,
                    new TreeNode(6),
                    new TreeNode(9)
                )
            )
        )
    )
)

