function makeAnagram(a, b) {
    const makeDict = (s) => {
        const dict = {};
        s.split('').forEach(_ => {
            if (!dict[_]) dict[_] = 1;
            else dict[_] += 1;
        })
        return dict;
    }
    const da = makeDict(a);
    const db = makeDict(b);

    const removeXFromY = (x, y) => {
        Object.keys(x).forEach(_ => {
            if (y[_]) {
                if (x[_] === y[_]) {
                    delete x[_];
                    delete y[_];
                }
                else if (x[_] > y[_]) {
                    x[_] -= y[_];
                    delete y[_];
                } else {
                    y[_] -= x[_];
                    delete x[_];
                }
            }
        })
    }

    removeXFromY(da, db);
    removeXFromY(db, da);

    return Object.values(da).reduce((a, b) => a + b, 0) + Object.values(db).reduce((a, b) => a + b, 0)
}

console.log(makeAnagram('cde', 'abc')) // 4
