var isSubsequence = function(s, t) {
    let cur = 0;
    for(let i = 0; i < t.length; i++) {
        if (t[i] === s[cur]) {
            cur += 1;
        }
    }
    return cur === s.length;
};

console.log(isSubsequence('abc', 'ahbgdc')) // true
console.log(isSubsequence('axc', 'ahbgdc')) // false
