function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (list1, list2) {
    if (!list1 && !list2) return list1;

    const list = new ListNode();
    let pointer = list;

    while (list1 || list2) {
        if (!list1 && list2) {
            pointer.val = list2.val;
            list2 = list2.next;
        }
        if (!list2 && list1) {
            pointer.val = list1.val;
            list1 = list1.next;
        }

        if (list1 && list2) {
            if (list1.val < list2.val) {
                pointer.val = list1.val;
                list1 = list1.next;
            } else {
                pointer.val = list2.val;
                list2 = list2.next;
            }
        }

        if (list1 || list2) {
            pointer.next = new ListNode();
            pointer = pointer.next;
        }
    }
    return list;
};

console.log(
    JSON.stringify(mergeTwoLists(
        new ListNode(-9, new ListNode(3)),
        new ListNode(5, new ListNode(7)),
    ))
)
console.log(
    JSON.stringify(mergeTwoLists(
        new ListNode(),
        new ListNode(0),
    ))
)