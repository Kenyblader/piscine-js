const calculateAverage = (array) =>{
    const sum = array.reduce((acc, val) => acc + val, 0);
    return sum / array.length;
}

const numbers = [10, 20, 30, 40, 50];
const average = calculateAverage(numbers);
console.log("Average:", average);