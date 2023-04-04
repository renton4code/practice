function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// O(n*log(n))
var sortedArrayToBST = function (nums) {
    const getMiddle = arr => arr.length % 2 === 0 ? arr.length / 2 : ((arr.length - 1) / 2);
    const middle = getMiddle(nums)
    const root = new TreeNode(nums[middle])

    walk(root, nums.slice(0, middle), nums.slice(middle + 1));
    return root;

    function walk(node, left, right) {
        if (left.length) {
            const m = getMiddle(left);
            node.left = new TreeNode(left[m]);
            walk(node.left, left.slice(0, m), left.slice(m + 1));
        }
        if (right.length) {
            const m = getMiddle(right);
            node.right = new TreeNode(right[m]);
            walk(node.right, right.slice(0, m), right.slice(m + 1));
        }
    }
};


console.log(JSON.stringify(sortedArrayToBST([0, 1, 2, 3, 4, 5])))