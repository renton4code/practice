var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let lo = 1;
        let hi = n;
        while(lo <= hi) {
            const mid = Math.floor((lo + hi) / 2);
            const res = isBadVersion(mid);
            if (res === false) {
                lo = mid + 1;
            }
            if (res === true) {
                hi = mid - 1;
            }
        }
        return lo;
    };
};


console.log(solution((x) => x >= 80)(2000))

