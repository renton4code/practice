// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    const min = Math.min(q.val, p.val);
    const max = Math.max(q.val, p.val);
    let curr = root;
    while (curr) {
        if (curr.val > max) {
            curr = curr.left;
        } else if (curr.val < min) {
            curr = curr.right;
        } else {
            return curr;
        }
    }
};

const p = new TreeNode(0);
const q = new TreeNode(2);

console.log(lowestCommonAncestor(
    new TreeNode(5,
        new TreeNode(3, new TreeNode(1, p, q), new TreeNode(4)),
        new TreeNode(7, new TreeNode(6), new TreeNode(8))
    ),
    p,
    q
)) // TreeNode(1...)

