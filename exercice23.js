const getGrade = (score) => {
    if (score >100 || score < 0) {
        throw new Error("Score must be between 0 and 100");
    }
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(95) )  
console.log(getGrade(85) )  
console.log(getGrade(75) )  
console.log(getGrade(65) )  
console.log(getGrade(55) )  
console.log(getGrade(100))  