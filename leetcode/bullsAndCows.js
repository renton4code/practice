var getHint = function (secret, guess) {
    const dict = {};
    for (let i = 0; i < secret.length; i++) {
        if (!dict[secret[i]]) dict[secret[i]] = 0;
        dict[secret[i]] += 1;
    }

    let bulls = 0;
    let cows = 0;
    const indexToSkip = new Set();
    for (let i = 0; i < guess.length; i++) {
        if (secret[i] === guess[i]) {
            bulls += 1;
            dict[guess[i]] -= 1;
            indexToSkip.add(i);
        }
    }
    for (let i = 0; i < guess.length; i++) {
        if (dict[guess[i]] && !indexToSkip.has(i)) {
            cows += 1;
            dict[guess[i]] -= 1;
        }
    }
    return `${bulls}A${cows}B`;
};

console.log(getHint('1807', '7810')) // 1A3B
console.log(getHint('1123', '0111')) // 1A1B
console.log(getHint('11', '10')) // 1A0B
console.log(getHint('1122', '0001')) // 0A1B


