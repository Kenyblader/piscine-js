function FindMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(FindMax([3, 45, 12, 78, 23, 9]));
console.log(FindMax([1, 2, 3, 4, 5]));
console.log(FindMax([-5, -2, -10, -1]));
console.log(FindMax([100]));