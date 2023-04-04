function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// Time: O(n*log(n)), memory: O(n)
var sortList = function(head) {
    if (!head) return null;
    const heads = new Set();
    let cur = head;
    while (cur) {
        heads.add(cur);
        cur = cur.next;
    }

    heads.forEach(_ => {
        _.next = null;
    });

    while(heads.size > 1) {
        const values = heads.values();
        let a = values.next().value;
        let b = values.next().value;
        while (a && b) {
            heads.delete(a);
            heads.delete(b);
            const merged = mergeSorted(a, b);
            heads.add(merged);
            a = values.next().value;
            b = values.next().value;
        }
    }

    return heads.values().next().value;

    function mergeSorted(a, b) {
        let tail = {val: -Infinity, next: null};
        const mergedHead = tail;
        while(true) {
            if (!a) {
                tail.next = b;
                break;
            }
            if (!b) {
                tail.next = a;
                break;
            }
            if (a.val < b.val) {
                tail.next = a;
                a = a.next;
            } else {
                tail.next = b;
                b = b.next;
            }
            tail = tail.next;
        }

        return mergedHead.next;
    }
};

sortList(
    new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(2, new ListNode(1)))))
)