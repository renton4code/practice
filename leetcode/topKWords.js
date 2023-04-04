// Time: O(n*log(n)), memory: O(k+n)
var topKFrequent = function(words, k) {
    const freq = {};
    for(let w of words) {
        if (!freq[w]) freq[w] = 0;
        freq[w] += 1;
    }

    const keys = Object.keys(freq);

    const freqToWord = {};
    keys.forEach(_ => {
        if(!freqToWord[freq[_]]) freqToWord[freq[_]] = []
        freqToWord[freq[_]].push(_);
    });

    const queue = [];
    for(let i = 0; i < k; i++) {
        queue.push(0);
    }

    for(let k of keys) {
        const f = freq[k];

        queue.push(null);
        for(let i = queue.length - 2; i >= 0; i--) {
            if (queue[i] >= f) {
                queue[i + 1] = f;
                break;
            } else {
                [queue[i + 1], queue[i]] = [queue[i], queue[i + 1]];
                if (i === 0) queue[0] = f;
            }
        }
        queue.pop();
    }

    return queue.map(_ => {
        return freqToWord[_].sort().shift();
    });
};

console.log(topKFrequent(["i","love","leetcode","i","love","coding"], 3))