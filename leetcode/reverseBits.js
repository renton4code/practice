var reverseBits = function(n) {
    n = n.toString(2)
    while(n.length < 32) {
        n = '0' + n;
    }
    const reversed = n.split('').reverse().join('');
    return parseInt(reversed, 2)
};

console.log(reverseBits(43261596)) // 964176192