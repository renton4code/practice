var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--) {
        const currentD = digits[i];
        if (currentD < 9) {
            digits[i] += 1;
            return digits;
        } else {
            digits[i] = 0;
        }
    }

    digits.push(0);
    digits[0] = 1;

    return digits;
};


console.log(plusOne([1,2,3]));
console.log(plusOne([1,9,9]));