


async function fetchWithRetry(url, options = {}, retries = 3, delay = 1000) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    // Erreurs HTTP
    if (!response.ok) {
      if (response.status >= 500 && retries > 0) {
        console.log(`Serveur indisponible (${response.status}), retry...`);
        await wait(delay);
        return fetchWithRetry(url, options, retries - 1, delay * 2);
      }
      switch (response.status){
        case 404: throw("la ressource n'as pas ete trouve");
        case 403: throw("vous n'etes pas authorise a acceder a cette ressource");
        case 401: throw("vous devez etre authentifie pour acceder a cette ressource");
        default: throw(`Erreur HTTP: ${response.status}`);
      }
    }

    return await response.json();

  } catch (erreur) {
    var message ;
    // Timeout
    if (erreur.name === 'AbortError') {
      console.log('Timeout dépassé');
      message = "Desole mais l requette a mis trop de temps a repondre";
    }
    // Problème réseau (pas de connexion)
    else if (erreur instanceof TypeError) {
      console.log('Erreur réseau');
      message = "erreur de connexion a internet veuiller verifier votre reseau";
    }
    else {
      message = erreur.message;
    }

    if (retries > 0) {
      console.log(`Nouvelle tentative dans ${delay}ms...`);
      await wait(delay);
      return fetchWithRetry(url, options, retries - 1, delay * 2);
    }

    throw erreur; // échec définitif
  }
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


fetchWithRetry('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => {
    console.log('Données reçues :', data);
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des données :', );
  });