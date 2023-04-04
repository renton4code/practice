var moveZeroes = function(nums) {
    let slow = 0;
    for(let fast = 0; fast < nums.length; fast++) {
        if (nums[slow] === 0 && nums[fast] !== 0) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
        }
        if (nums[slow] !== 0) slow += 1;
    }

    return nums;
};

console.log(moveZeroes([0,0, 1,0,3,12]))