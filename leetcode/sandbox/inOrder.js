function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// inorder traversal recursive
function inOrderRec(root) {
    walk(root);
    function walk(node) {
        if (!node) return;
        walk(node.left);
        console.log(node.val);
        walk(node.right);
    }
}

// inorder traversal iterative
function inOrderIter(root) {
   const stack = [];
   let curr = root;
   while (curr || stack.length) {
       while (curr) {
           stack.push(curr);
           curr = curr.left;
       }
       const top = stack.pop();
       console.log(top.val);
       curr = top.right;
   }
}


console.log(inOrderIter(
    new TreeNode(5,
        new TreeNode(3, new TreeNode(1, new TreeNode(0), new TreeNode(2)), new TreeNode(4)),
        new TreeNode(7, new TreeNode(6), new TreeNode(8))
    )
))