var numBusesToDestination = function(routes, source, target) {
    if (source === target) return 0;

    const busToRoutes = {};
    const routeToBuses = {};
    let startBus = -1, endBus = -1;
    for(let i = 0; i < routes.length; i++) {
        busToRoutes[i] = new Set();
        for(let r of routes[i]) {
            busToRoutes[i].add(r);
            if (!routeToBuses[r]) routeToBuses[r] = new Set();
            routeToBuses[r].add(i);
            if (r === source) startBus = i;
            if (r === target) endBus = i;
        }
        if (busToRoutes[i].has(source) && busToRoutes[i].has(target)) return 1;
    }

    let distance = 1;
    const stack = [startBus];
    const visited = new Set();
    while(stack.length) {
        const bus = stack.pop();
        visited.add(bus);
        distance += 1;
        const routes = busToRoutes[bus];
        const nextBuses = new Set();
        for(let r of routes) {
            for(let b of routeToBuses[r]) {
                if (!visited.has(b)) nextBuses.add(b);
            }
        }
        if (nextBuses.has(endBus)) return distance;
        nextBuses.forEach(b => stack.push(b));
    }
    return -1;
};

console.log(numBusesToDestination([[0,1,6,16,22,23],[14,15,24,32],[4,10,12,20,24,28,33],[1,10,11,19,27,33],[11,23,25,28],[15,20,21,23,29],[29]], 4, 21)); // 2
console.log(numBusesToDestination([[2],[2,8]], 8, 2));