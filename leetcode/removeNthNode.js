function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head;
    for(let i = 0; i < n; i++) fast = fast.next;
    if (!fast) return head.next;
    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return head;
};

console.log(
    removeNthFromEnd(
        new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
        4
    )
);
console.log(
    removeNthFromEnd(
        new ListNode(1),
        1
    )
);
console.log(
    removeNthFromEnd(
        new ListNode(1, new ListNode(2)),
        2
    )
);