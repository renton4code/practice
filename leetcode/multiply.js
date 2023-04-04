// Time: O(n*m), memory: O(m)
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0'
    const long = (num1.length > num2.length ? num1 : num2).split('').reverse();
    const short = (num1.length <= num2.length ? num1 : num2).split('').reverse();

    const products = [];
    for(let d of short) {
        products.push(multiplyLongByN(+d));
    }
    return sumProducts(products).reverse().join('');
    function sumProducts(products) {
        let maxLength = 0;
        for (let i = 0; i < products.length; i++) {
            let p = products[i];
            for (let n = 0; n < i; n++) {
                p.unshift(0);
            }
            products[i] = p;
            if (p.length > maxLength) maxLength = p.length;
        }

        let buffer = 0;
        const res = [];
        for (let i = 0; i < maxLength; i++) {
            let x = 0;
            for (let p of products) {
                x += +(p[i] || 0);
            }
            x += buffer;
            buffer = (x - (x % 10)) / 10;
            res.push(x % 10);
        }
        if (buffer) res.push(buffer)
        return res;
    }

    function multiplyLongByN(n) {
        let buffer = 0;
        const res = [];
        for(let d of long) {
            const x = (+d * n) + buffer;
            buffer = (x - (x % 10)) / 10;
            res.push(x % 10);
        }
        if (buffer) res.push(buffer);
        return res;
    }
};

console.log(multiply('98', '9')) // 882
