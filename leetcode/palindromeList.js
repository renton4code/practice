function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// With floyd cycle detection determine middle
// then reverse half of list
// then traverse back from end and from head comparing both values
var isPalindrome = function(head) {
    let slow = fast = head;
    while(fast?.next?.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let prev = slow;
    while(slow?.next) {
        slow = slow.next;
        slow.prev = prev;
        prev = slow;
    }
    fast = head;
    while(slow?.prev) {
        if (slow.val !== fast.val) {
            return false;
        }
        slow = slow.prev;
        fast = fast.next;
    }
    return true;
};

console.log(isPalindrome(
    new ListNode(1,
        new ListNode(2,
            new ListNode(3,
                new ListNode(4,
                    new ListNode(4,
                        new ListNode(3,
                            new ListNode(2,
                                new ListNode(1,))))))))
))