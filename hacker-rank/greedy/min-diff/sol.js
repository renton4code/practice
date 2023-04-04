function minimumAbsoluteDifference(arr) {
    arr.sort((a, b) => a - b);

    let res = Infinity;
    for(let i = 0; i < arr.length - 1; i++) {
        const curr = arr[i];
        const next = arr[i+1];
        const abs = Math.abs(curr - next);
        if (abs < res) {
            res = abs;
        }
    }

    return res;
}

console.log(minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])) // 1
console.log(minimumAbsoluteDifference([1, -3, 71, 68, 17])) // 3
console.log(minimumAbsoluteDifference([3, -7, 0])) // 3