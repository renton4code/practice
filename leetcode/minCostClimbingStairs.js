var minCostClimbingStairs = function(cost) {
    const minPriceForPath = [
        cost[0],
        cost[1]
    ]

    for (let i = 2; i < cost.length; i++) {
        const min = cost[i] + Math.min(minPriceForPath[i - 1], minPriceForPath[i - 2])
        minPriceForPath.push(min);
    }

    return Math.min(minPriceForPath.pop(), minPriceForPath.pop())
};

console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])) // 6

console.log(minCostClimbingStairs([10,15,20])) // 15
