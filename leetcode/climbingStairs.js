var climbStairs = function(n) {
    const hashMap = new Map();
    return calc(n)
    function calc(x) {
        let a, b = 0;
        if (x > 0) {
            if (!hashMap.has(x - 1)) {
                a = calc(x - 1);
                hashMap.set(x - 1, a);
            } else {
                a = hashMap.get(x - 1);
            }
        }
        if (x > 1) {
            if (!hashMap.has(x - 2)) {
                b = calc(x - 2);
                hashMap.set(x - 2, b);
            } else {
                b = hashMap.get(x - 2);
            }
        }
        if (x === 0) {
            return 1;
        }
        return a + b;
    }
};

console.log(climbStairs(3));