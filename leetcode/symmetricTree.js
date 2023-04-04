
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// iterative
// var isSymmetric = function(root) {
//     let queue = [root];
//     while(queue.length) {
//         const levelValues = [];
//         const newQueue = [];
//         for(let i = 0; i < queue.length; i++) {
//             const current = queue[i];
//             if (current) {
//                 newQueue.push(current.left);
//                 newQueue.push(current.right);
//             }
//             levelValues.push(current?.val)
//         }
//         queue = newQueue;
//         for(let i = 0; i < levelValues.length; i++) {
//             if (levelValues[i] !== levelValues[levelValues.length - 1 - i]) return false;
//         }
//     }
//     return true;
// };

// recursive
var isSymmetric = function(root) {
    const levels = {};
    walk(root, 0, levels);
    function walk(node, level, cache) {
        if (!cache[level]) {
            cache[level] = [];
        }
        cache[level].push(node?.val);
        if (node) {
            walk(node.left, level + 1, cache);
            walk(node.right, level + 1, cache);
        }
    }

    for(let lvl of Object.values(levels)) {
        for (let i = 0; i < lvl.length; i++) {
            if (lvl[i] !== lvl[lvl.length - 1 - i]) return false;
        }
    }

    return true;
};


console.log(isSymmetric(
    new TreeNode(1,
        new TreeNode(2, new TreeNode(3), new TreeNode(4)),
        new TreeNode(2, new TreeNode(4), new TreeNode(3))
    )
));

console.log(isSymmetric(
    new TreeNode(1,
        new TreeNode(2, new TreeNode(3), undefined),
        new TreeNode(2, new TreeNode(3), undefined)
    )
))