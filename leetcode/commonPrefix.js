var longestCommonPrefix = function(strs) {
    let res = '';
    for(let i = 0; i < strs[0].length; i ++) {
        const current = strs[0][i];
        for (let str of strs) {
            if (str[i] === undefined) return res;
            if (str[i] !== current) return res;
        }
        res += current;
    }
    return res;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])) // 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'flight'])) // ''
