/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n < 2) return n;
    let a = 0;
    let b = 1;
    let c = 0;
    for(let i=2; i<=n; i++){
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

console.log(fib(20))