
function canPartition(nums) {
    const sum = nums.reduce((acc, val) => acc + val, 0);
    if (sum % 2 !== 0) return false
    const target = sum / 2;
    const dp = Array.from({length: target + 1}).fill(false);
    dp[0] = true;
    for (const num of nums) {
        for (let j = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num];
        }
    }
    return dp[target];
}

console.log(canPartition([1,5,11,5])) // true

console.log(canPartition([1,4,5,8,12,13,14,17,18])) // true

console.log(canPartition([1,2,3,5])) // false
