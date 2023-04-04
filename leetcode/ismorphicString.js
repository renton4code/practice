/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    s = s.split('');
    let map = {};
    for(let i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) {
            map[s[i]] = i;
        }
        s[i] = map[s[i]];
    }
    s = s.join(' ');

    t = t.split('');
    map = {};
    for(let i = 0; i < t.length; i++) {
        if (map[t[i]] === undefined) {
            map[t[i]] = i;
        }
        t[i] = map[t[i]];
    }
    t = t.join(' ');
    return s === t;
};
console.log(isIsomorphic("ab", "aa")); // false
console.log(isIsomorphic("bbbaaaba", "aaabbbba")); // false
console.log(isIsomorphic('foo', 'bar')) // false
console.log(isIsomorphic('badc', 'baba')) // false
console.log(isIsomorphic('egg', 'add')) // true
console.log(isIsomorphic('paper', 'title')) // true
