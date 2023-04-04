var pacificAtlantic = function(heights) {

    const visited = [[]];
    for(let i = 0; i < heights.length; i++) {
        for(let j = 0; j < heights[0].length; j++) {
            const aopo = { ao: false, po: false };
            dfs(i, j, aopo);
            if (!visited[i]) visited[i] = [];
            visited[i][j] = aopo;
        }
    }

    const result = [];
    for(let i = 0; i < visited.length; i++) {
        for(let j = 0; j < visited[0].length; j++) {
            if (visited[i][j].ao && visited[i][j].po) result.push([i, j]);
        }
    }
    return result;

    function dfs(i ,j, aopo, path = new Set()) {
        if (path.has(`${i},${j}`)
            || i < 0
            || i === heights.length
            || j < 0
            || j === heights[0].length
            || aopo.po && aopo.ao
        ) return;
        path.add(`${i},${j}`);

        if (visited[i]?.[j] !== undefined) {
            if (visited[i][j].ao) aopo.ao = visited[i][j].ao;
            if (visited[i][j].po) aopo.po = visited[i][j].po;
        }
        if (!aopo.po && (i === 0 || j === 0)) aopo.po = true;
        if (!aopo.ao && (i === heights.length - 1 || j === heights[0].length - 1)) aopo.ao = true;

        const h = heights[i][j];
        if (heights[i + 1]?.[j] <= h) dfs(i + 1, j, aopo, path);
        if (heights[i - 1]?.[j] <= h) dfs(i - 1, j, aopo, path);
        if (heights[i]?.[j + 1] <= h) dfs(i, j + 1, aopo, path);
        if (heights[i]?.[j - 1] <= h) dfs(i, j - 1, aopo, path);
    }
};

console.log(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]))