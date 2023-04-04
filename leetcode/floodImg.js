// Time: O(n); Memory: O(n);
var floodFill = function(image, sr, sc, color) {
    const originalColor = image[sr][sc];
    visit(sr, sc);
    function visit(i, j) {
        if (i < 0 || i >= image.length || j < 0 && j >= image[0].length || image[i][j] === color || image[i][j] !== originalColor) return;
        image[i][j] = color;
        visit(i + 1, j);
        visit(i - 1, j);
        visit(i, j + 1);
        visit(i, j - 1);
    }
    return image;
};

console.log(floodFill(
    [[1,1,1],[1,1,0],[1,0,1]],
    1,
    1,
    2
)); //  [[2,2,2],[2,2,0],[2,0,1]]