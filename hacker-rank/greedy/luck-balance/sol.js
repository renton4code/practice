function luckBalance(k, contests) {
    contests.sort((a, b) => b[0] - a[0]);

    let res = 0;
    let limit = 0;
    for (let contest of contests) {
        if (contest[1] === 0) {
            res += contest[0];
        } else {
            if (limit < k) {
                res += contest[0];
                limit += 1;
            } else {
                res -= contest[0]
            }
        }
    }

    return res;
}


console.log(luckBalance(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]])) // 29