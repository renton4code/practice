function getMinimumCost(k, c) {
    c.sort((a,b) => b - a)
    let purchases = 0;
    let res = 0;
    for(let price of c) {
        if (purchases < k) {
            res += price;
        } else {
            res += (1 + Math.floor(purchases / k)) * price;
        }
        purchases += 1;
    }

    return res;
}

console.log(getMinimumCost(2, [1, 3, 5, 7, 9])); // 29