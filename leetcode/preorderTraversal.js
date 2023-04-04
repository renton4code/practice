function Node(val, children) {
    this.val = val;
    this.children = children;
};


var preorder = function(root) {
    const stack = [];

    if (!root || root.val === undefined) return [];

    const curs = [root];
    while(curs.length) {
        const cur = curs.shift();
        stack.push(cur.val);
        if (cur.children) {
            curs.unshift(...cur.children)
        }

    }
    return stack;
};

console.log(preorder(
    new Node(1, [
        new Node(3, [new Node(5), new Node(6)]), new Node(2), new Node(4)
    ])
)) // [1,3,5,6,2,4]

