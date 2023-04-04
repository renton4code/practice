var uniquePaths = function(m, n) {
    const dp = [[1]];
    for(let i = 0; i < m - 1; i++) {
        for(let j = 0; j < n - 1; j++) {
            if (!dp[i]) {
                dp[i] = [];
            }
            dp[i][j] = (i > 0 ? dp[i-1][j] : 1) + (j > 0 ? dp[i][j-1] : 1);
        }
    }
    return dp[m-2][n-2];
};

console.log(uniquePaths(3, 7))