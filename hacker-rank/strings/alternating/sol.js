function alternatingCharacters(ss) {
    const s = ss.split('');
    let res = 0;
    for(let i = 0; i < s.length; i++) {
        while(s[i + 1] && s[i + 1] === s[i]) {
            res += 1;
            i += 1;
        }
    }
    return res;
}

console.log(alternatingCharacters('AAABBB')) // 4
console.log(alternatingCharacters('AAAA')) // 3