function whatFlavors(cost, money) {
    const mapIndexes = {}
    // O(n)
    for (let i = 0; i < cost.length; i++) {
        if (!mapIndexes[cost[i]]) {
            mapIndexes[cost[i]] = {};
        }
        mapIndexes[cost[i]][i] = true;
    }
    // O(n * log n)
    cost.sort((a, b) => a - b);

    // we need to find array part where we can look
    const subArray = getArray(cost);

    for (let i = 0; i < subArray.length; i++) {
        for (let j = i + 1; j < subArray.length; j++) {
            if (subArray[i] + subArray[j] === money) {
                const originalI = Object.keys(mapIndexes[subArray[i]])[0];
                delete mapIndexes[subArray[i]][originalI]
                const originalJ = Object.keys(mapIndexes[subArray[j]])[0];

                console.log(`${Math.min(+originalI, +originalJ) + 1} ${Math.max(+originalI, +originalJ) + 1}`);
                return;
            }
        }
    }

    function getArray(arr, pivot = arr.length) {
        const middle = Math.floor(arr.length / 2) - pivot;
        if (arr[middle] + arr[middle - 1] > money) {
            return getArray(arr, pivot)
        }
        return arr.slice(0, pivot);
    }
}

console.log(whatFlavors([1, 4, 5, 3, 2], 4)) // [1, 4]
console.log(whatFlavors([2, 2, 4, 3], 4)) // [1, 2]
