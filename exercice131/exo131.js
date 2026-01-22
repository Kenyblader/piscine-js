const couleur = document.getElementById("couleur");
const genererBtn = document.getElementById("generer");
genererBtn.addEventListener("click", () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const couleurHex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    couleur.textContent = couleurHex;
    document.body.style.backgroundColor = couleurHex;
});
