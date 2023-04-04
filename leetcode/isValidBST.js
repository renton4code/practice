function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


// Trying recursive not optimal with Time: O(n^2)
var isValidBST = function(root) {
    const stack = [];
    let curr = root;
    let prev = null;
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        const top = stack.pop();
        if (prev !== null && prev >= top.val) return false;
        prev = top.val;
        curr = top.right;
    }
    return true;
};

console.log(isValidBST(
    new TreeNode(5,
        new TreeNode(3, new TreeNode(1), new TreeNode(4)),
        new TreeNode(7, new TreeNode(6), new TreeNode(8))
    )
)) // true

console.log(isValidBST(
    new TreeNode(5,
        new TreeNode(4),
        new TreeNode(6, new TreeNode(3), new TreeNode(7))
    )
)) // false