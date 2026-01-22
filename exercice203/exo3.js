function creerBanque(proprietaire, soldeInitial = 0) {
  let _solde = soldeInitial;

  
  return {
    deposer(montant) {
      if (montant <= 0) {
        console.log("Montant invalide");
        return;
      }
      _solde += montant;
    },

    retirer(montant) {
      if (montant <= 0 || montant > _solde) {
        console.log("Retrait impossible");
        return;
      }
      _solde -= montant;
    },

    consulter() {
      return _solde;
    },

    info() {
      return `Compte de ${proprietaire}`;
    }
  };
}

const compteAli = creerBanque("prince", 100);

compteAli.deposer(50);
compteAli.retirer(30);

console.log(compteAli.consulter()); 
console.log(compteAli.info());     
