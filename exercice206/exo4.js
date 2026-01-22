function intervalLength(interval){
    return interval.end - interval.start;
}
console.log(intervalLength({start: 1, end: 5}));    // Affiche : 4
console.log(intervalLength({start: 10, end: 20}));  // Affiche : 10
console.log(intervalLength({start: -5, end: 5}));   // Affiche : 10
console.log(intervalLength({start: 0, end: 0}));    // Affiche : 0