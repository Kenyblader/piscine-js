class SystemeTags {
  constructor() {
    this.articles = new Map();        // id -> { id, titre, contenu, tags:Set }
    this.indexTags = new Map();       // tag -> Set<id>
  }

  ajouterArticle(id, titre, contenu, tags) {
    const tagsSet = new Set(tags);

    this.articles.set(id, { id, titre, contenu, tags: tagsSet });

    for (const tag of tagsSet) {
      if (!this.indexTags.has(tag)) {
        this.indexTags.set(tag, new Set());
      }
      this.indexTags.get(tag).add(id);
    }
  }

  ajouterTag(articleId, tag) {
    const article = this.articles.get(articleId);
    if (!article) return;

    article.tags.add(tag);

    if (!this.indexTags.has(tag)) {
      this.indexTags.set(tag, new Set());
    }
    this.indexTags.get(tag).add(articleId);
  }

  retirerTag(articleId, tag) {
    const article = this.articles.get(articleId);
    if (!article) return;

    article.tags.delete(tag);

    if (this.indexTags.has(tag)) {
      this.indexTags.get(tag).delete(articleId);
      if (this.indexTags.get(tag).size === 0) {
        this.indexTags.delete(tag);
      }
    }
  }

  rechercherParTag(tag) {
    const ids = this.indexTags.get(tag) || new Set();
    return [...ids].map(id => this.articles.get(id));
  }

  rechercherParTags(tags, mode = 'OR') {
    if (tags.length === 0) return [];

    if (mode === 'OR') {
      const result = new Set();
      for (const tag of tags) {
        const ids = this.indexTags.get(tag);
        if (ids) {
          for (const id of ids) result.add(id);
        }
      }
      return [...result].map(id => this.articles.get(id));
    }

    if (mode === 'AND') {
      let result = new Set(this.indexTags.get(tags[0]) || []);
      for (let i = 1; i < tags.length; i++) {
        const ids = this.indexTags.get(tags[i]) || new Set();
        result = new Set([...result].filter(id => ids.has(id)));
      }
      return [...result].map(id => this.articles.get(id));
    }
  }

  obtenirTousLesTags() {
    return [...this.indexTags.keys()];
  }

  obtenirStatsTags() {
    const stats = [];
    for (const [tag, ids] of this.indexTags.entries()) {
      stats.push({ tag, count: ids.size });
    }
    return stats.sort((a, b) => b.count - a.count);
  }

  afficherArticle(id) {
    const article = this.articles.get(id);
    if (!article) return null;

    return {
      id: article.id,
      titre: article.titre,
      contenu: article.contenu,
      tags: [...article.tags]
    };
  }
}

const test = () => {
    const systeme = new SystemeTags();

systeme.ajouterArticle(1, "Introduction à JavaScript",
  "JavaScript est un langage de programmation...",
  ['javascript', 'programmation', 'web']
);

systeme.ajouterArticle(2, "Guide des Promesses",
  "Les promesses permettent de gérer l'asynchrone...",
  ['javascript', 'async', 'promesses']
);

systeme.ajouterArticle(3, "CSS Grid Layout",
  "Grid est un système de mise en page...",
  ['css', 'web', 'design']
);

console.log(systeme.rechercherParTag('javascript')); 
// Articles 1 et 2

console.log(systeme.rechercherParTags(['javascript', 'css'], 'OR')); 
// Articles 1, 2, 3

console.log(systeme.rechercherParTags(['javascript', 'web'], 'AND')); 
// Article 1

console.log(systeme.obtenirStatsTags());

}

test();