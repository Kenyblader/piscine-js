const titre = document.getElementById("titre");
titre.textContent = "Le titre a été modifié !";

const contenu = document.getElementById("contenu");
contenu.innerHTML= "le contenu a été modifié !";

const description = document.getElementById("description");

description.classList.add("highlight");
description.classList.remove("normal");
description.classList.toggle("large");

const bouton = document.getElementById("monBouton");

bouton.style.backgroundColor = "blue";
bouton.style.color = "white";
bouton.style.padding = "10px 20px";
bouton.style.borderRadius = "3px";

bouton.setAttribute("title", "Bouton interactif");
console.log(bouton.getAttribute("class"));