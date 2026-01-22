const onSubmit = (event) => {
    event.preventDefault();
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    document.getElementById("message").innerText = `Nom: ${nom}, Email: ${email}`;
    document.getElementById("monFormulaire").reset();
};

document.getElementById("monFormulaire").addEventListener("submit", onSubmit);