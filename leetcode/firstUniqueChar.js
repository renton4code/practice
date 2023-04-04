var firstUniqChar = function(s) {
    const freq = {};
    for(let i = 0; i < s.length; i++) {
        if (!freq[s[i]]) {
            freq[s[i]] = 0;
        }
        freq[s[i]]++;
    }
    for(let key of Object.keys(freq)) {
        const f = freq[key];
        if (f === 1) return s.indexOf(key);
    }
    return -1;
};

console.log(firstUniqChar("loveleetcode"));