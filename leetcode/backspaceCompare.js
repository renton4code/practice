/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let curA = s.length - 1;
    let curB = t.length - 1;

    let numberToSkipInA = 0;
    let numberToSkipInB = 0;
    while(curA >= 0 || curB >= 0) {
        if (s[curA] === '#') {
            numberToSkipInA += 1;
            curA -= 1;
            continue;
        }
        if (t[curB] === '#') {
            numberToSkipInB += 1;
            curB -= 1;
            continue;
        }
        if (numberToSkipInA) {
            numberToSkipInA -= 1;
            curA -= 1;
            continue;
        }
        if (numberToSkipInB) {
            numberToSkipInB -= 1;
            curB -= 1;
            continue;
        }
        if (s[curA] !== t[curB]) return false;
        curA -= 1;
        curB -= 1;
    }
    return true;
};


console.log(backspaceCompare('ab#c', 'ad#c')) // true
console.log(backspaceCompare('x00ab#####', 'xc#d#')) // true
console.log(backspaceCompare('a#c', 'b')) // false
