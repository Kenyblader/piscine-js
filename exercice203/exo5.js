function creerLogger(niveau) {
  return function (message) {
    console.log(`[${niveau}] ${message}`);
  };
}
const infoLogger = creerLogger("INFO");
const errorLogger = creerLogger("ERROR");
infoLogger("Ceci est un message d'information.");
errorLogger("Ceci est un message d'erreur.");