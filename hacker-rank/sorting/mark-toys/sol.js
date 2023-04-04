function maximumToys(prices, k) {
  // O(n*log(n))
  prices.sort((a, b) => a - b);

  let res = 0;

  for (let p of prices) {
    if (k - p > 0) {
      k -= p;
      res += 1;
    } else {
      break;
    }
  }

  return res;
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));
