var longestPalindrome = function(s) {
    const hashMap = {};
    for (let _ of s) {
        if (!hashMap[_]) hashMap[_] = 1;
        else hashMap[_] += 1;
    }

    let length = 0;

    Object.keys(hashMap).forEach((key) => {
        if (hashMap[key] && hashMap[key] % 2 === 0) {
            length += hashMap[key];
            delete hashMap[key];
        } else if (hashMap[key] > 1) {
            length += hashMap[key] - 1;
            hashMap[key] = 1;
        }
    });

    if (Object.keys(hashMap).length) {
        length += 1;
    }

    return length;
};

console.log(longestPalindrome('abccccdd')) // 7