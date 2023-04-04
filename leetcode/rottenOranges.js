// DFS
var orangesRottingDFS = function (grid) {
    if (!grid.length) return -1;
    let max = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                const minDistance = walk(i, j);
                if (minDistance === Infinity) return -1;
                const newMax = minDistance;
                if (newMax > max) max = newMax;
            }
        }
    }
    return max;

    function walk(i, j, distance = 0, visited = {}) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length
            || grid[i][j] === 0
            || visited[`${i},${j}`]
        ) return Infinity;
        visited[`${i},${j}`] = true;
        if (grid[i][j] === 2) return distance;
        if (grid[i][j] === 1) {
            const v = {...visited};
            return Math.min(
                walk(i - 1, j, distance + 1, v),
                walk(i, j - 1, distance + 1, v),
                walk(i + 1, j, distance + 1, v),
                walk(i, j + 1, distance + 1, v),
            );
        }
    }
};

var orangesRotting = function (grid) {
    if (!grid.length) return -1
    let queue = []
    let freshCount = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) queue.push([i, j])
            if (grid[i][j] === 1) freshCount += 1
        }
    }

    let minutes = 0
    while (queue.length && freshCount) {
        minutes += 1
        const newQueue = [];
        for(let [i, j] of queue) {
            updateCell(i + 1, j, newQueue)
            updateCell(i - 1, j, newQueue)
            updateCell(i, j - 1, newQueue)
            updateCell(i, j + 1, newQueue)
        }
        queue = newQueue;
    }
    return freshCount ? -1 : minutes

    function updateCell(i, j, q) {
        if (grid[i]?.[j] === 1) {
            grid[i][j] = 2
            q.push([i, j])
            freshCount -= 1
        }
    }
}

console.log(orangesRotting([[2, 1, 1], [1, 1, 1], [0, 1, 2]])); // 2
console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]])); // 4
console.log(orangesRotting([[1], [2], [2]])) // 1