var isPowerOfThree = function(n) {
    if (n > 1) {
        while (n > 1) {
            n /= 3;
        }
        if (n === 1) return true;
    } else {
        if (n <= 0) return false;
        while (n < 0.999) {
            n *= 3;
        }
        if (Math.abs(n - 1) < 0.00000000001) return true;
    }
    return false;
};

var isPowerOfThreeFast = function(n) {
    return n.toString(3).replace(/^10*$/, '') === '';
};

console.log(isPowerOfThree(3))
console.log(isPowerOfThree(9))
console.log(isPowerOfThree(27))


