// Time: O(n), memory: O(1)
var longestCommonPrefix = function(strs) {
    let lastCommonIndex = 0;

    commonIndexCheck:
    for(lastCommonIndex; lastCommonIndex < strs[0].length; lastCommonIndex++) {
        const referenceLetter = strs[0][lastCommonIndex];

        if (referenceLetter === undefined) break;

        for (let str of strs) {
            if (str[lastCommonIndex] !== referenceLetter) break commonIndexCheck;
        }
    }
    return strs[0].slice(0, lastCommonIndex);
};

console.log(longestCommonPrefix(["flower","flow","flight"]))