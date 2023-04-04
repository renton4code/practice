/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    let positions = [];
    for (let i = 0; i < grid[0].length; i++) {
        positions.push(i);
    }

    for(let level = 0; level < grid.length; level++) {
        for(let p = 0; p < positions.length; p++) {
            const pos = positions[p];
            if (pos === -1) continue;
            const bottomPiece = grid[level][pos];
            if (bottomPiece === 1) {
                const neighbour = grid[level][pos + 1];
                if (neighbour === undefined || neighbour === -1) {
                    positions[p] = -1;
                } else {
                    positions[p] += 1;
                }
            } else {
                const neighbour = grid[level][pos - 1];
                if (neighbour === undefined || neighbour === 1) {
                    positions[p] = -1;
                } else {
                    positions[p] -= 1;
                }
            }
        }
    }

    return positions;
};


console.log(findBall([[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]])); // [1,-1,-1,-1,-1]
console.log(findBall([[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]])); // [0,1,2,3,4,-1]