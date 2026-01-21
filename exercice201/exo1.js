function attendreDelai(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms); 
    });
}

async function afficherMessage() {
    console.log("⏳ Attente...");
    await attendreDelai(2000); 
    console.log("✅ Terminé !");
}

afficherMessage();


//201 A 5
//202 A 1 