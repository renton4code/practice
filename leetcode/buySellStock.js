// Kadane's algorithm for max subarray
var maxProfit = function(prices) {
    let maxProfit = 0;
    let profit = 0;
    for(let i = 0; i < prices.length - 1; i++) {
        const newProfit = prices[i + 1] - prices[i];
        profit = Math.max(profit + newProfit, newProfit);
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }
    return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
