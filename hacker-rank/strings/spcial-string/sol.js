function substrCount(_, s) {
    let res = 0;

    s = s.split('');

    for(let i = 0; i < s.length; i++){
        collect(i);
    }

    return res;

    function collect(i) {
        // start
        res += 1;

        // can expand both sides
        let x = 1;
        while (s[i - x] && s[i + x] && s[i + 1] !== s[i] && s[i + 1] === s[i + x] &&  s[i - x] === s[i + x]) {
            res += 1;
            x += 1;
        }

        // can expand only forward
        x = 1;
        while(s[i + x] && s[i + x] === s[i]) {
            res += 1;
            x += 1;
        }
    }

}

console.log(substrCount(5, 'asasd')) // 7
console.log(substrCount(5, 'abcbaba')) // 10
console.log(substrCount(5, 'aaaa')) // 10