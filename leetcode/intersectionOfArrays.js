var intersect = function(nums1, nums2) {
    const biggerArray = nums1.length >= nums2 ? nums1 : nums2;
    const smallerArray = biggerArray === nums1 ? nums2 : nums1;

    const cache = {};

    for(let _ of biggerArray) {
        if (!cache[_]) cache[_] = 0;
        cache[_] += 1;
    }

    let res = [];

    for (let _ of smallerArray) {
        if (cache[_]) {
            res.push(_);
            cache[_] -= 1;
        }
    }

    return res;
};

console.log(intersect([1,2,2,1], [2,2]));