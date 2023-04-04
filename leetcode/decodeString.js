// Time: O(n), memory: O(n)
var decodeString = function (s) {
    const symbols = s.split('');

    let res = '';
    let stack = []
    while (symbols.length) {
        const last = symbols.pop();
        // alphabetic
        if (last > '\x60' && last < '\x7b') {
            if (!stack.length) {
                res += last;
            } else {
                stack[stack.length - 1] += last;
            }
        } else if (last === ']') {
            stack.push('')
        } else if (last === '[') {
            let multiplier = '';
            // numeric
            while (
                symbols[symbols.length - 1] > '\x2f'
                && symbols[symbols.length - 1] < '\x3a'
            ) multiplier = symbols.pop() + multiplier;
            multiplier = parseInt(multiplier);
            const lastGroup = stack.pop();
            while (multiplier--) {
                if (stack.length) stack[stack.length - 1] += lastGroup;
                else res += lastGroup;
            }
        }
    }
    return res.split('').reverse().join('');
};

console.log(decodeString('3[a]2[bc]')) // aaabcbc
