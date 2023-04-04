function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var levelOrder = function(root) {
    if (!root) return [];
    const levels = [];
    const queue = [root];
    while(queue.length) {
        const lvl = [];
        const queueLevel = queue.length;
        for (let i = 0; i < queueLevel; i++) {
            const current = queue.shift();
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
            lvl.push(current.val);
        }
        levels.push(lvl);
    }
    return levels;
};
console.log(levelOrder(
    new TreeNode(3, new TreeNode(9, ), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
)) // [ [3], [9, 20], [15, 7] ]

