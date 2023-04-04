function maxMin(k, arr) {
    arr.sort((a, b) => a - b);

    let min = Infinity;
    for(let i = 0; i + k - 1 < arr.length; i++) {
        const x = arr[i + k - 1] - arr[i];
        if (x < min) {
            min = x;
        }
    }

    return min;
}

console.log(maxMin(4, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200])) // 3
