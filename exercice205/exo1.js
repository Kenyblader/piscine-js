function testMotif(texte, motif) {
  const regex = new RegExp(motif, "i");
  return regex.test(texte);
}

function extraireMots(texte, prefixe) {
  const regex = new RegExp(`\\b${prefixe}\\w*`, "gi");
  return texte.match(regex) || [];
}

function remplacerMotif(texte, ancien, nouveau) {
  const regex = new RegExp(ancien, "gi");
  return texte.replace(regex, nouveau);
}

function diviserProprement(texte) {
  return texte.split(/\s*,\s*/);
}


const test1 = () => {
    // Test de motif
console.log(testMotif("Hello World", "hello")); // true
console.log(testMotif("Bonjour", "hello"));     // false

// Extraction
console.log(extraireMots("Les chats et les chiens jouent", "ch"));
// ["chats", "chiens"]

console.log(extraireMots("Le soleil brille", "br"));
// ["brille"]

// Remplacement
console.log(remplacerMotif("Les pommes et les pommes", "pommes", "oranges"));
// "Les oranges et les oranges"

// Division
console.log(diviserProprement("1, 2,  3,4,   5"));
// ["1", "2", "3", "4", "5"]

}

const test2=() => {
    const texte = "Il y a 2 chats et 3 chiens";
const regex = /\d+/g;

// match
console.log(texte.match(regex)); // ["2", "3"]

// exec
let resultat;
while ((resultat = regex.exec(texte)) !== null) {
  console.log(resultat[0]); // 2 puis 3
}
}

// Lancer les tests
test1();
test2();