function bissextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(bissextile(2024));
console.log(bissextile(2023));
console.log(bissextile(2000));
console.log(bissextile(1900)); 