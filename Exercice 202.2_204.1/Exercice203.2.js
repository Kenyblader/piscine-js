function creerSalutation(nom) {
  return function () {
    console.log("Bonjour " + nom);
  };
}

const saluerAli = creerSalutation("Ali");
const saluerSara = creerSalutation("Sara");

saluerAli(); 
saluerAli();  

saluerSara(); 
