var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const checkUntil = s.length % 2 === 0 ? s.length / 2 : (s.length - 1) / 2;
    for(let i = 0; i < checkUntil; i++) {
        if (s[i] !== s[s.length - i - 1]) return false
    }
    return true;
};

// console.log(isPalindrome('A man, a plan, a canal: Panama')) // true
// console.log(isPalindrome('abcba')) // true
console.log(isPalindrome('ab_a')) // true
