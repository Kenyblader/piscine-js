const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterEven = (array) => {
    return array.filter(num => num % 2 === 0);
}

const filteredArray = filterEven(tab);
console.log(filteredArray);