function max3(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    };
}

console.log(max3(10, 5, 8));
console.log(max3(-1, -5, -3));
console.log(max3(1, 2, 3));
console.log(max3(7,7,7));