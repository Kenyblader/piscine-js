var tab = ["JavaScript", "Python", "Java"];
console.log("langages de programmation :", tab);
var nouveau_langage = "C++";
tab.push (nouveau_langage);
console.log("après l'ajout d'un nouveau langage :", tab);
var Sup_langage = tab.pop();
console.log("après la suppression du dernier langage :", tab);
console.log("langage supprimé :", Sup_langage);

var index = tab.unshift("Ruby", "PHP");;
console.log("après l'ajout de deux langages au début :", tab);