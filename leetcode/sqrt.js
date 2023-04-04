var mySqrt = function(x) {
    let max = 46342;

    while(true) {
        if (max * max > x) {
            max -= 1;
        } else {
            break;
        }
    }
    return max;
};

console.log(mySqrt(222));