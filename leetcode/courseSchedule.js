var findOrder = function(numCourses, prerequisites) {
    const requestToCourse = new Map()
    for(let i = 0; i < numCourses; i++) {
        requestToCourse.set(i, [])
    }
    prerequisites.forEach(([c, r]) => {
        requestToCourse.get(r).push(c);
    });

    let stack = new Set();
    const visited = {}
    let isPossible = true;
    for (let i = 0; i < numCourses; i++) visited[i] = 'w';
    for(let n of requestToCourse.keys()) dfs(n);
    if (!isPossible) return [];
    return [...stack].reverse();

    function dfs(node) {
        if (!isPossible) return;
        visited[node] = 'g';
        if (requestToCourse.has(node)) {
            for (let n of requestToCourse.get(node)) {
                if (visited[n] === 'w') {
                    dfs(n);
                } else if (visited[n] === 'g') {
                    isPossible = false;
                    return;
                }
            }

        }
        visited[node] = 'b';
        stack.add(node);
    }
};

console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));

console.log(findOrder(3, [[1,0]]));
