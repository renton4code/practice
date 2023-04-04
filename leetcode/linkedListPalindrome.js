function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (!head) return false;

    let fast = head;
    let prev = null;
    let listSize = 1;
    while (fast.next) {
        fast.prev = prev;
        prev = fast;
        fast = fast.next;
        listSize += 1;
    }
    fast.prev = prev;

    const howManyStepsToCheck = listSize % 2 === 0 ? listSize / 2 : (listSize - 1) / 2;
    let slow = head;

    for (let i = 0; i < howManyStepsToCheck; i++) {
        if (slow.val !== fast.val) return false;
        slow = slow.next;
        fast = fast.prev;
    }

    return true;
};


console.log(
    isPalindrome(
        new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1))))),
    )
);