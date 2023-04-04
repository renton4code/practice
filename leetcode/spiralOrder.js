// Time: O(n), memory: O(n)
var spiralOrder = function (matrix) {
    let rightLimit = matrix[0].length - 1;
    let bottomLimit = matrix.length - 1;
    let leftLimit = 0;
    let topLimit = 0;

    const res = []

    toRight(0, 0);
    return res;

    function toRight(row, col) {
        let went = false;
        for (let i = col; i <= rightLimit; i++) {
            res.push(matrix[row][i]);
            went = true;
        }
        rightLimit -= 1;
        row < bottomLimit && went && toBottom(row + 1, rightLimit + 1);
    }

    function toBottom(row, col) {
        let went = false;
        for (let i = row; i <= bottomLimit; i++) {
            res.push(matrix[i][col]);
            went = true;
        }
        bottomLimit -= 1;
        col > leftLimit && went && toLeft(bottomLimit + 1, col - 1);
    }

    function toLeft(row, col) {
        let went = false;
        for (let i = col; i >= leftLimit; i--) {
            res.push(matrix[row][i]);
            went = true;
        }
        leftLimit += 1;
        row > topLimit && went && toTop(row - 1, leftLimit - 1);
    }

    function toTop(row, col) {
        let went = false;
        for (let i = row; i > topLimit; i--) {
            res.push(matrix[i][col]);
            went = true;
        }
        topLimit += 1;
        col < rightLimit && went && toRight(topLimit, col + 1);
    }
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log(spiralOrder([[3],[2]]))
console.log(spiralOrder([[1,2],[3,4]]))
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
console.log(spiralOrder([[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]))
