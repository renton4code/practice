// Time: O(n)
var characterReplacement = function (s, k) {
    const freq = {};
    let left = 0;
    let max = 0;
    let mostFreqLetterCount = 0;
    for(let right = 0; right < s.length; right++) {
        freq[s[right]] = (freq[s[right]] ?? 0) + 1;
        mostFreqLetterCount = Math.max(mostFreqLetterCount, freq[s[right]]);
        const lettersToChange = (right - left + 1) - mostFreqLetterCount;
        if (lettersToChange > k) {
            freq[s[left]] -= 1;
            left += 1;
        }
        max = Math.max(max, right - left + 1)
    }
    return max;
};

console.log(characterReplacement('ABAB', 2)) // 4
console.log(characterReplacement('AABABBA', 1)) // 4
console.log(characterReplacement('AAAA', 2)) // 4
console.log(characterReplacement('ABBB', 2)) // 4
console.log(characterReplacement('AABA', 0)) // 2
console.log(characterReplacement('ABCDE', 1)) // 2
