var findAnagrams = function(s, p) {
    const ref = {};
    for(let _ of p) {
        if (!ref[_]) {
            ref[_] = 0;
        }
        ref[_] += 1;
    }

    const test = {};
    for(let _ of s.slice(0, p.length)) {
        if (!test[_]) {
            test[_] = 0;
        }
        test[_] += 1;
    }

    const indexes = [];
    for(let i = 0; i <= s.length - p.length; i++) {
        // check if test is anagram
        let isAnagram = true;
        for(let key of Object.keys(test)) { // <-- O(1) since test and ref are 26 keys maximum
            if (test[key] !== ref[key]) {
                isAnagram = false;
                break;
            }
        }
        if (isAnagram) indexes.push(i);

        // adjust test
        test[s[i]] -= 1;
        if (test[s[i]] === 0) delete test[s[i]];
        if (!test[s[i + p.length]]) test[s[i + p.length]] = 0;
        test[s[i + p.length]] += 1;
    }
    return indexes;
};

console.log(findAnagrams('cbaebabacd', 'abc'))