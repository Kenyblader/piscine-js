class CookieManager {
    static set(name, value, options = {}) {
        let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

        // Gérer les options d'expiration
        if (options.expires) {
            const date = new Date(options.expires);
            cookieString += `;expires=${date.toUTCString()}`;
        } else if (options['max-age']) {
            cookieString += `;max-age=${options['max-age']}`;
        }

        // Ajouter le flag de sécurité "Secure"
        if (options.secure) {
            cookieString += ';secure';
        }

        // Ajouter le flag "SameSite"
        if (options.sameSite) {
            cookieString += `;SameSite=${options.sameSite}`;
        }

        document.cookie = cookieString; // Créer le cookie
    }

    static get(name) {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === encodeURIComponent(name)) {
                return decodeURIComponent(cookieValue); // Lire le cookie
            }
        }
        return null; // Si le cookie n'existe pas
    }

    static remove(name) {
        this.set(name, '', { expires: 'Thu, 01 Jan 1970 00:00:00 GMT' }); // Supprimer le cookie
    }

    static has(name) {
        return this.get(name) !== null; // Vérifier l'existence du cookie
    }

    static getAll() {
        const cookies = {};
        const allCookies = document.cookie.split('; ');
        for (const cookie of allCookies) {
            const [name, value] = cookie.split('=');
            cookies[decodeURIComponent(name)] = decodeURIComponent(value); // Récupérer tous les cookies
        }
        return cookies;
    }
}

class CookieConsent {
    constructor() {
        this.consentCookieName = 'cookie_consent'; // Nom du cookie de consentement
    }

    hasConsent() {
        return CookieManager.has(this.consentCookieName) && CookieManager.get(this.consentCookieName) === 'true'; // Vérifier le consentement
    }

    giveConsent() {
        CookieManager.set(this.consentCookieName, 'true', { expires: new Date(Date.now() + 31536000000), secure: true, sameSite: 'Strict' }); // Donner le consentement
    }

    revokeConsent() {
        CookieManager.remove(this.consentCookieName); // Révoquer le consentement
    }
}