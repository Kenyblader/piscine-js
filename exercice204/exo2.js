
class Cache {
    list ;
    maxSize;

    constructor(maxSize) {
        this.list = new Map();
        this.maxSize = maxSize;
    }

    set(key, value) {
        if (this.list.size >= this.maxSize) {
            const firstKey = this.list.keys().next().value;
            this.list.delete(firstKey);
        }
        this.list.set(key, value);
    }

    get(key) {
        return this.list.get(key);
    }

    has(key) {
        return this.list.has(key);
    }

    clear() {
        this.list.clear();
    }
}

const compterMots = (text) =>{
    const listMots = text.split(" ");
    const map = new Map();
    for (const mot of listMots) {
        const motMin = mot.toLowerCase();
        if (map.has(motMin)) {
            map.set(motMin, map.get(motMin) + 1);
        } else {
            map.set(motMin, 1);
        }
    }
    return map;
}

const cache = new Cache(3);
cache.set('user1', { name: 'Alice' });
cache.set('user2', { name: 'Bob' });
cache.set('user3', { name: 'Charlie' });
cache.set('user4', { name: 'David' });  // user1 est supprimé (FIFO)
console.log(cache.has('user1'));  // false
console.log(cache.get('user2'));  // { name: 'Bob' }

// Compteur de mots
const texte = "le chat et le chien jouent. Le chat dort";
const occurrences = compterMots(texte);
console.log(occurrences.get('le'));    // 3
console.log(occurrences.get('chat'));  // 2

// Map avec objets comme clés
const objetA = { id: 1 };
const objetB = { id: 2 };
const metadata = new Map();
metadata.set(objetA, { created: '2024-01-01' });
metadata.set(objetB, { created: '2024-01-02' });
console.log(metadata.get(objetA));  // { created: '2024-01-01' }