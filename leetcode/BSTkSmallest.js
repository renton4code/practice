function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let queue = [];

    walk(root);
    return queue[k - 1];

    function walk(node) {
        if (!node) return;
        walk(node.left);
        queue.push(node.val)
        walk(node.right);
    }
};

console.log(kthSmallest(
    new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4)),
    3
)) // 3

