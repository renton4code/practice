var rob = function(nums) {
    let permutationsChanged = [false];
    let permutations = [0];

    for(let n of nums) {
        const newPermutations = [];
        const newChanged = [];
        let largestNotChanged = 0;
        for (let i = 0; i < permutations.length; i++) {
            if (permutationsChanged[i]) {
                newPermutations.push(permutations[i]);
                newChanged.push(false);
            } else {
                newPermutations.push(permutations[i] + n);
                newChanged.push(true);
                if (largestNotChanged < permutations[i]) {
                    largestNotChanged = permutations[i];
                }
            }
        }
        newPermutations.push(largestNotChanged);
        newChanged.push(false);
        permutations = newPermutations;
        permutationsChanged = newChanged;
    }
    return Math.max(...permutations);
};

console.log(rob([183,219,57,193,94,233,202,154,65,240,97,234,100,249,186,66,90,238,168,128,177,235,50,81,185,165,217,207,88,80,112,78,135,62,228,247,211]))
