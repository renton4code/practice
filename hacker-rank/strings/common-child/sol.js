function commonChild(s1, s2) {
    const dict = []

    const letterIndexesCache = {};

    for(let i = 0; i < s1.length; i++) {
        const _ = s1.charAt(i);
        let indexes;
        if (letterIndexesCache[_]) {
            indexes = letterIndexesCache[_];
        } else {
            indexes = []
            for(let j = 0; j < s2.length; j++) {
                if (s2.charAt(j) === _) {
                    indexes.push(j)
                }
            }
            letterIndexesCache[_] = indexes;
        }
        if (indexes.length) {
            dict.push(indexes)
        }
    }

    const cacheLengths = {};
    return goDeeper(0, -1);


    function goDeeper(level, prevValue) {
        if (!cacheLengths[level]) {
            cacheLengths[level] = {};
        }
        if (cacheLengths[level][prevValue]) {
            return cacheLengths[level][prevValue];
        }

        if (!dict[level]) return 0;

        const successor = dict[level].find(_ => _ > prevValue);

        let lengthA = 0;
        let lengthB = goDeeper(level + 1, prevValue);

        if (successor !== undefined) {
            lengthA =  1 + goDeeper(level + 1, successor);
        }

        const res = Math.max(lengthA, lengthB);
        cacheLengths[level][prevValue] = res;
        return res;
    }
}

console.log(commonChild('CCCXABC', 'ABCCCABX')) // 5
console.log(commonChild('SHINCHAN', 'NOHARAAA')) // 3
console.log(commonChild('HARRY', 'SALLY')) // 2
console.log(commonChild('ABCDEF', 'FBDAMN')) // 2
console.log(commonChild('AA', 'BB')) // 0

