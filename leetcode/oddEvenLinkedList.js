function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// Time: O(n), memory: O(1)
var oddEvenList = function(head) {
    if (!head) return head;

    let oddCursor = head;
    let evenCursor = head.next;

    const evenHead = head.next;

    while(evenCursor?.next) {
        oddCursor.next = oddCursor.next.next || null;
        oddCursor = oddCursor.next;
        evenCursor.next = evenCursor.next.next || null;
        evenCursor = evenCursor.next;
    }

    oddCursor.next = evenHead;

    return head;
};

// 1, 3, 5, 2, 4
oddEvenList(
    new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
)

oddEvenList(new ListNode(1))

oddEvenList(null)
