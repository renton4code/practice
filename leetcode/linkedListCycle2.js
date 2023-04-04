function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// Floyd optimisation
var detectCycle = function(head) {
    let fast = slow = entry = head;

    while(fast?.next?.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            while (entry !== slow) {
                entry = entry.next;
                slow = slow.next;
            }
            return entry
        }
    }

    return null;
};

const a = new ListNode(3);
const b = new ListNode(2);
const c = new ListNode(0);
const d = new ListNode(-4);

a.next = b;
b.next = c;
c.next = d;
d.next = b;

console.log(detectCycle(a));
