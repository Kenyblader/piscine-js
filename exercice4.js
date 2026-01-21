const montantHT = 100;


function MontantTVA(montantHT, tauxTVA) {
    return montantHT * (tauxTVA / 100);
}
function MontantTTC(montantHT, tauxTVA) {
    return montantHT + MontantTVA(montantHT, tauxTVA);
}
console.log(montantHT);
console.log(MontantTTC(100, 20));
console.log(MontantTVA(100, 20));
 