function combinerchaînes(chaine1, chaine2) {
    const resultat = chaine1 + chaine2;
    const resultatTemplateLiteral = `${chaine1}${chaine2}`;
    const resultatConcat = chaine1.concat(chaine2);
    
    console.log('resultat:', resultat);
    console.log('resultatTemplateLiteral:', resultatTemplateLiteral);
    console.log('resultatConcat:', resultatConcat);
}

combinerchaînes("Hello", "World") 
combinerchaînes("Bonjour", "JS")   
combinerchaînes("", "Test")        