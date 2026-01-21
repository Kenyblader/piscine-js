function splitInterval(interval, n) {
    const points = [];
    const step = (interval.end - interval.start) / n;
    for (let i = 0; i <= n; i++) {
        points.push(interval.start + i * step);
    }
    return points;
} 

console.log(splitInterval({start: 0, end: 10}, 5));    // Affiche : [0, 2, 4, 6, 8, 10]
console.log(splitInterval({start: 0, end: 1}, 4));      // Affiche : [0, 0.25, 0.5, 0.75, 1]
console.log(splitInterval({start: 10, end: 20}, 2));    // Affiche : [10, 15, 20]
