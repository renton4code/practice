// Time: O(n**2), memory: O(n)
var numIslands = function (grid) {
    let counter = 0;
    const visitedCells = {};
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            counter += visit(i, j) ? 1 : 0;
        }
    }

    function visit(i, j) {
        // checking boundaries;
        if (i < 0
            || i >= grid.length
            || j < 0
            || j >= grid[0].length
            || visitedCells[i]?.has(j)
            || grid[i][j] !== '1') return false;
        // marking as visited
        if (!visitedCells[i]) {
            visitedCells[i] = new Set();
        }
        visitedCells[i].add(j);
        // marking neighbour cells
        visit(i + 1, j);
        visit(i - 1, j);
        visit(i, j + 1);
        visit(i, j - 1);
        return true;
    }

    return counter;
};


console.log(numIslands(
    [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"]
    ]
))