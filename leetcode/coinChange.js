// BFS
// var coinChange = function(coins, amount) {
//     if (amount === 0) return 0
//     const stack = new Set([...coins]);
//     const v = {};
//     let counter = 1;
//     while(stack.size) {
//         for(let n of [...stack]) {
//             if (n === amount) {
//                 return counter
//             }
//             if (n < amount && !v[n]) {
//                 for (x of coins) stack.add(x + n);
//             }
//             stack.delete(n);
//             v[n] = true;
//         }
//         counter += 1;
//     }
//     return -1;
// };

// DP
var coinChange = function(coins, amount) {
    const dp = Array.from({ length: amount + 1 }).fill(amount + 1);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for(let c of coins) {
            if (c <= i) {
                dp[i] = Math.min(dp[i], dp[i - c] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};

console.log(coinChange([1,2,5], 11)) // 3