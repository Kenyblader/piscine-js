class GeoLocation {
  constructor() {
    this._watchId = null;
  }

  // Position actuelle (Promise)
  async getCurrentPosition(options = {}) {
    if (!("geolocation" in navigator)) {
      throw new Error("Geolocation non supportée par ce navigateur.");
    }

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude, accuracy } = pos.coords;
          resolve({
            latitude,
            longitude,
            accuracy,
            timestamp: pos.timestamp
          });
        },
        (err) => reject(this._formatError(err)),
        options
      );
    });
  }

  // Suivi en temps réel
  watchPosition(callback, errorCallback, options = {}) {
    if (!("geolocation" in navigator)) {
      if (typeof errorCallback === "function") {
        errorCallback(new Error("Geolocation non supportée par ce navigateur."));
      }
      return null;
    }

    // Si déjà en suivi, on évite de relancer sans clear
    if (this._watchId !== null) return this._watchId;

    this._watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude, accuracy } = pos.coords;
        callback({
          latitude,
          longitude,
          accuracy,
          timestamp: pos.timestamp
        });
      },
      (err) => {
        if (typeof errorCallback === "function") {
          errorCallback(this._formatError(err));
        }
      },
      options
    );

    return this._watchId;
  }

  // Arrêter le suivi
  clearWatch() {
    if (this._watchId !== null && "geolocation" in navigator) {
      navigator.geolocation.clearWatch(this._watchId);
      this._watchId = null;
    }
  }

  // Distance (Haversine) en km entre 2 points
  static calculateDistance(lat1, lon1, lat2, lon2) {
    const toRad = (deg) => (deg * Math.PI) / 180;

    const R = 6371; // rayon Terre en km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  _formatError(err) {
    // err.code: 1 permission denied, 2 position unavailable, 3 timeout
    switch (err.code) {
      case 1:
        return new Error("Permission refusée par l’utilisateur.");
      case 2:
        return new Error("Position indisponible (réseau/GPS).");
      case 3:
        return new Error("Délai dépassé (timeout).");
      default:
        return new Error("Erreur inconnue de géolocalisation.");
    }
  }
}

class ProximityFinder {
  constructor(geo = new GeoLocation()) {
    this.geo = geo;
  }

  // places: [{ name, latitude, longitude, ... }]
  async findNearby(places, maxDistKm) {
    const me = await this.geo.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    });

    const resultats = places
      .map((p) => {
        const dist = GeoLocation.calculateDistance(
          me.latitude,
          me.longitude,
          p.latitude,
          p.longitude
        );
        return { ...p, distanceKm: dist };
      })
      .filter((p) => p.distanceKm <= maxDistKm)
      .sort((a, b) => a.distanceKm - b.distanceKm);

    return { me, nearby: resultats };
  }
}

