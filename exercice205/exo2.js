// 1. Email
function validerEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// 2. Téléphone français
function validerTelephoneFR(tel) {
  const regex = /^(0\d{9}|\+33\d{9}|0\d([ .]?\d{2}){4})$/;
  return regex.test(tel);
}

// 3. Code postal
function validerCodePostal(cp) {
  return /^\d{5}$/.test(cp);
}

// 4. Mot de passe fort
function validerMotDePasse(mdp) {
  const details = {
    longueur: mdp.length >= 8,
    majuscule: /[A-Z]/.test(mdp),
    minuscule: /[a-z]/.test(mdp),
    chiffre: /\d/.test(mdp),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(mdp)
  };

  return {
    valide: Object.values(details).every(v => v === true),
    details
  };
}

// 5. URL
function validerURL(url) {
  const regex = /^(https?:\/\/)[\w.-]+(\.[a-z]{2,})(\/.*)?$/i;
  return regex.test(url);
}

// 6. Couleur hexadécimale
function validerCouleurHex(couleur) {
  return /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(couleur);
}


const test = () => {
    // Email
validerEmail('test@example.com');  // true
validerEmail('invalide');          // false

// Téléphone
validerTelephoneFR('0123456789');     
console.log(validerTelephoneFR('01 23 45 67 89')); 
console.log(validerTelephoneFR('+33123456789'));   
console.log(validerTelephoneFR('123456'));         

// Code postal
console.log(validerCodePostal('75001'));  
console.log(validerCodePostal('1234'));   

// Mot de passe
console.log(validerMotDePasse('Abc123!@'));
console.log(validerMotDePasse('faible'));

// URL
console.log(validerURL('https://example.com'));
console.log(validerURL('http://sub.example.com/path'));
console.log(validerURL('invalide'));

// Couleur
console.log(validerCouleurHex('#FF5733'));
console.log(validerCouleurHex('#F57'));
console.log(validerCouleurHex('FF5733'));

}

test();