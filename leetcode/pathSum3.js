function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var pathSum = function (root, targetSum) {
    if (!root) return 0;

    let targetPaths = 0;
    goDown(root);
    return targetPaths;

    function goDown(node, parent) {
        node.parent = parent;
        !node.left && !node.right && goUp(node);
        node.left && goDown(node.left, node);
        node.right && goDown(node.right, node);
    }

    function goUp(node) {
        let start = node;
        while (start) {
            if (start.visited) break;
            let sum = 0;
            let end = start;
            while (end) {
                sum += end.val;
                if (sum === targetSum) targetPaths+= 1;
                end = end.parent;
            }
            start.visited = true;
            start = start.parent;
        }
    }
};

console.log(
    pathSum(
        new TreeNode(10,
            new TreeNode(5,
                new TreeNode(3,
                    new TreeNode(3),
                    new TreeNode(-2)
                ),
                new TreeNode(2,
                    undefined,
                    new TreeNode(1)
                )
            ),
            new TreeNode(-3,
                undefined,
                new TreeNode(11)
            )
        ),
        8
    )
)