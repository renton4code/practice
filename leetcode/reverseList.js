function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var reverseList = function (head) {
    let cur = head;
    let prev = null;
    while (cur) {
        const n = cur.next;
        cur.next = prev;
        prev = cur;
        cur = n;
    }
    return prev;
};

console.log(reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))))