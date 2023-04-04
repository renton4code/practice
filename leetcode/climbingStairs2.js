/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <=2) return n;
    // Recursive formula = f(n + 2) = f(n + 1) + f(n); f(0) = 0; f(1) = 1; f(2) = 2;
    // DP iterative, O(n), memory O(1)
    let f2 = 2;
    let f1 = 1;
    let f3;
    for (let i = 2; i < n; i++) {
        f3 = f2 + f1;
        f1 = f2;
        f2 = f3;
    }
    return f3;
};

console.log(climbStairs(1));