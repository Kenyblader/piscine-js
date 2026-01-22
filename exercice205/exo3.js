// 1. Hashtags (avec accents)
function extraireHashtags(texte) {
  return texte.match(/#[\p{L}\d_]+/gu) || [];
}

// 2. Mentions
function extraireMentions(texte) {
  return texte.match(/@\w+/g) || [];
}

// 3. URLs
function extraireURLs(texte) {
  return texte.match(/https?:\/\/[^\s]+/g) || [];
}

// 4. Dates DD/MM/YYYY
function extraireDates(texte) {
  const regex = /(\d{2})\/(\d{2})\/(\d{4})/g;
  const resultats = [];
  let match;

  while ((match = regex.exec(texte)) !== null) {
    resultats.push({
      complete: match[0],
      jour: match[1],
      mois: match[2],
      annee: match[3]
    });
  }
  return resultats;
}

// 5. Prix en €
function extrairePrix(texte) {
  const regex = /(\d+(?:[.,]\d{2}))€/g;
  const resultats = [];
  let match;

  while ((match = regex.exec(texte)) !== null) {
    resultats.push(parseFloat(match[1].replace(',', '.')));
  }
  return resultats;
}

// 6. Coordonnées GPS
function extraireCoordonnees(texte) {
  const regex = /(-?\d+\.\d+),\s*(-?\d+\.\d+)/g;
  const coords = [];
  let match;

  while ((match = regex.exec(texte)) !== null) {
    coords.push({
      latitude: parseFloat(match[1]),
      longitude: parseFloat(match[2])
    });
  }
  return coords;
}

// 7. Masquer emails
function masquerEmails(texte) {
  return texte.replace(/(\b\w)(\w+)(@[\w.-]+\.\w+\b)/g, (_, p1, p2, p3) => {
    return p1 + "***" + p3;
  });
}

// 8. Formater téléphone
function formaterTelephone(numero) {
  return numero.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
}

// 9. Analyser CSS (hex -> rgb)
function analyserCSS(css) {
  const regex = /#([A-Fa-f0-9]{6})/g;
  const couleurs = [];
  let match;

  while ((match = regex.exec(css)) !== null) {
    const hex = match[0];
    const r = parseInt(match[1].substring(0, 2), 16);
    const g = parseInt(match[1].substring(2, 4), 16);
    const b = parseInt(match[1].substring(4, 6), 16);

    couleurs.push({
      hex,
      rgb: `rgb(${r}, ${g}, ${b})`
    });
  }
  return couleurs;
}


const test = () => {
    console.log(extraireHashtags("J'adore #JavaScript et #WebDev ! #code2024"));
// ['#JavaScript', '#WebDev', '#code2024']

console.log(extraireMentions("Salut @alice et @bob"));
// ['@alice', '@bob']

console.log(extraireURLs("Visitez https://example.com et http://test.fr"));
// ['https://example.com', 'http://test.fr']

console.log(extraireDates("Réunion le 15/01/2024 et 20/03/2024"));
// [{ complete:'15/01/2024', jour:'15', mois:'01', annee:'2024' }, ...]

console.log(extrairePrix("Total: 49,99€ + 15.50€"));
// [49.99, 15.5]

console.log(extraireCoordonnees("Paris: 48.8566, 2.3522"));
// [{ latitude: 48.8566, longitude: 2.3522 }]

console.log(masquerEmails("Contactez alice@example.com ou bob@test.fr"));
// "Contactez a***@example.com ou b***@test.fr"

console.log(formaterTelephone("0123456789"));
// "01 23 45 67 89"

console.log(analyserCSS("color:#FF5733; background:#3498DB;"));
// [{ hex:'#FF5733', rgb:'rgb(255, 87, 51)' }, { hex:'#3498DB', rgb:'rgb(52, 152, 219)' }]

}

test();