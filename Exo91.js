  const title = document.getElementById('titre');
        title.style.color = 'blue';
        console.log(title.textContent);
        const paragraphes = document.querySelectorAll(".paragraphe");
        paragraphes.forEach(paragraphes => {
            console.log(paragraphes.textContent);
        });
        const liste = document.querySelectorAll("#liste li");
        liste.forEach(item => {
            console.log(item.textContent);
        });
        const bouton = document.getElementById("monBouton");