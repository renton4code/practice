var twoSum = function(nums, target) {
    const numberToIndex = {};
    for(let i = 0; i < nums.length; i++) {
        const remaining = target - nums[i];
        if (numberToIndex[nums[i]] !== undefined) {
            return [i, numberToIndex[nums[i]]];
        }
        numberToIndex[remaining] = i;
    }
};

console.log(twoSum([2,7,11,15], 9));