function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// var middleNode = function (head) {
//     const nodeRefs = [];
//     while(head) {
//         nodeRefs.push(head);
//         head = head.next;
//     }
//     let middleElement = nodeRefs.length % 2 !== 0 ? (nodeRefs.length - 1) / 2 : (nodeRefs.length / 2);
//     return nodeRefs[middleElement]
// };

var middleNode = function (head) {
    let slow = fast = head;
    while(fast?.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    return slow
};



console.log(middleNode(
    new ListNode(1,
        new ListNode(2,
            new ListNode(3,
                new ListNode(4,
                    new ListNode(5,
                        new ListNode(6))))))
))

