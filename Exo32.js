function sumUpTo(n) {
    var sum = 0;
    for (var i = 1 ; i <= n ; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumUpTo(5));
console.log(sumUpTo(55));
console.log(sumUpTo(5050));