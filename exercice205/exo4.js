class AnalyseurLogs {
  constructor() {
    this.logs = [];
    this.stats = {
      total: 0,
      parNiveau: {},
      parIP: {},
      erreurs: []
    };
  }

  analyserLigne(ligne) {
    const regex = /^\[(.+?)\]\s+\[(INFO|ERROR|WARN|DEBUG)\]\s+([\d.]+)\s+-\s+(.*)$/;
    const match = ligne.match(regex);

    if (!match) return null;

    return {
      timestamp: new Date(match[1]),
      niveau: match[2],
      ip: match[3],
      message: match[4]
    };
  }

  mettreAJourStats(log) {
    this.stats.total++;

    // Par niveau
    if (!this.stats.parNiveau[log.niveau]) {
      this.stats.parNiveau[log.niveau] = 0;
    }
    this.stats.parNiveau[log.niveau]++;

    // Par IP
    if (!this.stats.parIP[log.ip]) {
      this.stats.parIP[log.ip] = 0;
    }
    this.stats.parIP[log.ip]++;

    // Erreurs
    if (log.niveau === 'ERROR') {
      this.stats.erreurs.push(log);
    }
  }

  analyserFichier(contenu) {
    const lignes = contenu.trim().split('\n');

    for (const ligne of lignes) {
      const log = this.analyserLigne(ligne.trim());
      if (log) {
        this.logs.push(log);
        this.mettreAJourStats(log);
      }
    }

    return this.stats;
  }

  filtrerParNiveau(niveau) {
    return this.logs.filter(log => log.niveau === niveau);
  }

  filtrerParIP(ip) {
    return this.logs.filter(log => log.ip === ip);
  }

  filtrerParPeriode(debut, fin) {
    return this.logs.filter(log => log.timestamp >= debut && log.timestamp <= fin);
  }

  rechercherMotif(motif) {
    const regex = new RegExp(motif, "i");
    return this.logs.filter(log => regex.test(log.message));
  }

  obtenirTopIPs(limite = 5) {
    return Object.entries(this.stats.parIP)
      .map(([ip, count]) => ({ ip, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, limite);
  }

  genererRapport() {
    console.log("====== RAPPORT D'ANALYSE DES LOGS ======");
    console.log(`Total d'entrées : ${this.stats.total}\n`);

    console.log("Répartition par niveau :");
    for (const niveau in this.stats.parNiveau) {
      const count = this.stats.parNiveau[niveau];
      const pourcentage = ((count / this.stats.total) * 100).toFixed(2);
      console.log(`- ${niveau} : ${count} (${pourcentage}%)`);
    }

    console.log("\nTop IPs :");
    this.obtenirTopIPs().forEach(ip =>
      console.log(`- ${ip.ip} : ${ip.count} requêtes`)
    );

    console.log("\nDernières erreurs :");
    this.stats.erreurs.slice(-5).forEach(err =>
      console.log(`[${err.timestamp.toISOString()}] ${err.ip} - ${err.message}`)
    );

    console.log("=======================================");
  }
}

const test = () => {
    const analyseur = new AnalyseurLogs();

const logs = `
[2024-01-15 10:30:45] [INFO] 192.168.1.100 - Utilisateur connecté
[2024-01-15 10:31:12] [ERROR] 192.168.1.101 - Erreur de connexion BDD
[2024-01-15 10:32:00] [WARN] 192.168.1.100 - Tentative échouée
[2024-01-15 10:33:15] [INFO] 192.168.1.102 - Requête GET /api/users
`;

const stats = analyseur.analyserFichier(logs);

console.log(stats.total);           // 4
console.log(stats.parNiveau.INFO);  // 2
console.log(stats.parNiveau.ERROR); // 1

analyseur.genererRapport();

const erreurs = analyseur.filtrerParNiveau('ERROR');
const ip100 = analyseur.filtrerParIP('192.168.1.100');
const connexions = analyseur.rechercherMotif('connexion');
const topIPs = analyseur.obtenirTopIPs(3);
console.log("erreurs: ",erreurs);
console.log("IP 192.168.1.100: ",ip100);
console.log("Connexions: ",connexions);
console.log("Top IPs: ",topIPs);
}

test();