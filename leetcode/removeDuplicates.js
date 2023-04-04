var removeDuplicates = function(nums) {
    let insertPoint = 0;
    for(let i = 0; i < nums.length; i++) {
        const tail = nums[insertPoint];
        if (tail !== nums[i]) {
            insertPoint += 1;
            nums[insertPoint] = nums[i];
        }
    }
    return insertPoint + 1;
};

console.log(removeDuplicates([1,1,2]))