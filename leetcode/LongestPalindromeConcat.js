// Time: O(n), memory: O(1)
var longestPalindrome = function(words) {
    let res = 0;
    const freq = {};

    for(let w of words) {
        if (freq[w]) {
            freq[w] -= 1;
            res += 4;
        } else {
            const rw = w[1] + w[0];
            if (!freq[rw]) freq[rw] = 0;
            freq[rw] += 1;
        }
    }
    for(let w of Object.keys(freq)) {
        if (freq[w] && w[0] === w[1]) {
            res += 2;
            break;
        }
    }

    return res;
}

console.log(longestPalindrome(["ll","lb","bb","bx","xx","lx","xx","lx","ll","xb","bx","lb","bb","lb","bl","bb","bx","xl","lb","xx"])); // 26
console.log(longestPalindrome(["lc","cl","gg"])); // 6
console.log(longestPalindrome(["ab","ty","yt","lc","cl","ab"])); // 8
console.log(longestPalindrome(["cc","ll","xx"])); // 2
