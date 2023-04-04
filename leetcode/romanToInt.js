var romanToInt = function(s) {
    const defMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    const specialCases = {
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900,
    }

    let res = 0;

    for(let i = 0; i < s.length;) {
        if (specialCases[s[i] + s[i + 1]]) {
            res += specialCases[s[i] + s[i + 1]];
            i += 2;
        } else {
            res += defMap[s[i]];
            i += 1;
        }
    }
    return res;
};

console.log(romanToInt("III"));

