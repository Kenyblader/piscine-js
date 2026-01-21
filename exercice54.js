let langages = ["JavaScript", "Python", "Java", "C++", "Ruby"];

const afficherLangages = (langages) => {
    console.log("Langages de programmation populaires :");
    var i = 1;
    langages.forEach(langage => {
        console.log(`${i}- ${langage}`);
        i++;
    });
};
afficherLangages(langages);