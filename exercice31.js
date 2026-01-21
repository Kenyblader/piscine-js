const multiplicationTable = (num) => {
    console.log(`Multiplication Table for ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

multiplicationTable(5);
multiplicationTable(6);
multiplicationTable(7);