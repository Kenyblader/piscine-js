class Storage {
    static set(key, value) {
        try {
            const serializedValue = JSON.stringify(value); // Sérialiser la valeur en JSON
            localStorage.setItem(key, serializedValue); // Sauvegarder dans LocalStorage
        } catch (error) {
            console.error('Erreur lors de la sauvegarde dans LocalStorage:', error);
        }
    }
    
    static get(key, defaultValue = null) {
        try {
            const serializedValue = localStorage.getItem(key); // Récupérer depuis LocalStorage
            return serializedValue === null ? defaultValue : JSON.parse(serializedValue); // Désérialiser
        } catch (error) {
            console.error('Erreur lors de la récupération de LocalStorage:', error);
            return defaultValue; // Retourner la valeur par défaut en cas d'erreur
        }
    }

    static remove(key) {
        try {
            localStorage.removeItem(key); // Supprimer un item
        } catch (error) {
            console.error('Erreur lors de la suppression dans LocalStorage:', error);
        }
    }

    static clear() {
        try {
            localStorage.clear(); // Supprimer tout
        } catch (error) {
            console.error('Erreur lors de la suppression de tout dans LocalStorage:', error);
        }
    }
}

class UserPreferences {
    constructor(prefix = '') {
        this.prefix = prefix; // Préfixe optionnel pour les clés dans LocalStorage
    }

    load() {
        // Charger toutes les préférences
        const preferences = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith(this.prefix)) {
                preferences[key] = Storage.get(key); // Récupérer avec le wrapper
            }
        }
        return preferences;
    }

    save(preferences) {
        // Sauvegarder les préférences
        Object.keys(preferences).forEach(key => {
            Storage.set(this.prefix + key, preferences[key]); // Utiliser le préfixe
        });
    }

    set(key, value) {
        Storage.set(this.prefix + key, value); // Modifier une préférence
    }

    get(key) {
        return Storage.get(this.prefix + key); // Lire une préférence
    }

    reset() {
        // Réinitialiser les préférences
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith(this.prefix)) {
                Storage.remove(key); // Supprimer chaque préférence
            }
        }
    }
}