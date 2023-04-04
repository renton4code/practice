// Time: O(n*log(n)), memory: O(n)
var lastStoneWeight = function(stones) {
    // descending order
    stones.sort((a, b) => b - a)

    for(let i = 0; i < stones.length;) {
        const x = stones[i];
        const y = stones[i + 1];
        if (y === undefined) break;

        stones[i] = +Infinity;
        stones[i + 1] = +Infinity;
        x - y > 0 && allocate(x - y);
        i += 2;
    }

    function allocate(x) {
        stones.push(null);
        for(let i = stones.length - 2; i >= 0; i--) {
            if (stones[i] >= x) {
                stones[i + 1] = x;
                break;
            } else {
                [stones[i], stones[i + 1]] = [stones[i + 1], stones[i]];
                if (i === 0) {
                    stones[i] = x;
                }
            }
        }
    }

    return stones.filter(_ => _ !== +Infinity)[0] || 0;
};

console.log(lastStoneWeight([200, 100, 50, 50])) // 1
