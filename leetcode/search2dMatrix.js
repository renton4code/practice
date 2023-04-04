var searchMatrix = function(matrix, target) {
    // define row
    let lo = 0;
    let hi = matrix.length - 1;
    while(lo <= hi) {
        const mid = (lo + hi) % 2 === 0 ? (lo + hi) / 2 : (lo + hi - 1) / 2;
        if (lo === mid || hi === mid) break;
        if (matrix[mid][0] > target) {
            hi = mid;
        } else {
            lo = mid;
        }
    }

    // define cell
    const row = matrix[hi][0] <= target ? matrix[hi] : matrix[lo];
    lo = 0;
    hi = row.length - 1;
    while(lo <= hi) {
        const mid = (lo + hi) % 2 === 0 ? (lo + hi) / 2 : (lo + hi - 1) / 2;
        if (row[lo] === target || row[hi] === target) return true;
        if (lo === mid || hi === mid) break;
        if (row[mid] > target) {
            hi = mid;
        } else {
            lo = mid;
        }
    }

    return false;
};

console.log(searchMatrix([[1], [3]], 3)) // true