/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // find rotation point in array in O(log(n))
    let lo = 0;
    let hi = nums.length - 1;

    while(lo < hi) {
        const mid = Math.floor((hi + lo) / 2);
        if (nums[mid] > nums[hi]) lo = mid + 1;
        else hi=mid;
    }

    const orderedArr1 = nums.slice(0, lo);
    const orderedArr2 = nums.slice(lo);

    // then just do bin. search in both arrays with O(log(n))
    const r1 = binSearch(orderedArr1, target);
    const r2 = binSearch(orderedArr2, target);
    if (r1 !== -1) return r1;
    if (r2 !== -1) return r2 + orderedArr1.length;
    return -1;


    function binSearch(arr, t) {
        let lo = 0;
        let hi = arr.length - 1;
        while (lo < hi) {
            const mid = Math.floor((hi + lo) / 2);
            if (arr[mid] === t) return mid;
            if (arr[mid] < t) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        return -1;
    }
};

console.log(search([5,1,3], 0))