var isHappy = function(n) {
    const cache = new Set();
    return calc(n);
    function calc(x) {
        if (x === 1) return true;
        const next = x.toString().split('').map(_ => +_ * +_).reduce((acc, curr) => acc + curr, 0);
        if (cache.has(next)) return false;
        cache.add(next);
        return calc(next)
    }
};

console.log(isHappy(19));
console.log(isHappy(2));
