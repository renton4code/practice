/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const freq = {};
    for (let n of nums) {
        if (!freq[n]) {
            freq[n] = true;
        } else {
            return true;
        }
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1]));