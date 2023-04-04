function ListNode(val, next) {
    this.val = val;
    this.next = next ?? null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) return null;
    let curA = headA;
    let curB = headB;
    while(curA !== curB) {
        curA = curA === null ? headB : curA.next;
        curB = curB === null ? headA : curB.next;
    }
    return curA;
};

const common = new ListNode(8, new ListNode(4, new ListNode(5)))

console.log(getIntersectionNode(
    new ListNode(4, new ListNode(1, common)),
    new ListNode(5, new ListNode(6, new ListNode(1, common)))
))