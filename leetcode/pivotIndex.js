/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const leftSum = [];
    const rightSum = [];
    for(let i = 0; i < nums.length; i++) {
        if (i === 0) {
            leftSum.push(0);
            rightSum.push(0);
        } else {
            leftSum.push(nums[i - 1] + leftSum[leftSum.length - 1]);
            rightSum.push(nums[nums.length - i] + rightSum[rightSum.length - 1]);
        }
    }
    for(let i = 0; i < nums.length; i++) {
        const currentSumLeft = leftSum[i];
        const currentSumRight = rightSum[nums.length - 1 - i];
        if (currentSumLeft === currentSumRight) {
            return i;
        }
    }

    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1,2,3]));

