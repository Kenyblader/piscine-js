class TimezoneConverter {
  
  static getOffset(date, timezone) {
    const d = date instanceof Date ? date : new Date(date);

    
    try {
      const fmt = new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
        timeZoneName: "shortOffset",
        hour: "2-digit"
      });

      const parts = fmt.formatToParts(d);
      const tzPart = parts.find(p => p.type === "timeZoneName")?.value; 
      if (tzPart) {
        const m = tzPart.match(/GMT([+-])(\d{1,2})(?::?(\d{2}))?/);
        if (m) {
          const sign = m[1] === "-" ? -1 : 1;
          const hh = parseInt(m[2], 10);
          const mm = m[3] ? parseInt(m[3], 10) : 0;
          return sign * (hh * 60 + mm);
        }
      }
    } catch (_) {
      // fallback plus bas
    }

    // Fallback: reconstruire l'heure "dans timezone" et comparer à UTC
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: timezone,
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", second: "2-digit",
      hourCycle: "h23"
    }).formatToParts(d);

    const get = (t) => parseInt(parts.find(p => p.type === t).value, 10);

    const y = get("year");
    const mo = get("month");
    const da = get("day");
    const h = get("hour");
    const mi = get("minute");
    const s = get("second");

    // On traite ces composants comme si c’était de l’UTC
    const asUTC = Date.UTC(y, mo - 1, da, h, mi, s);
    const realUTC = d.getTime();

    // offset = "timezone time" - "UTC time"
    return Math.round((asUTC - realUTC) / 60000);
  }

  // Convertit un instant en "heure lisible" dans un timezone (retourne un objet de composants)
  static toTimezone(date, timezone) {
    const d = date instanceof Date ? date : new Date(date);

    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: timezone,
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", second: "2-digit",
      hourCycle: "h23"
    }).formatToParts(d);

    const pick = (t) => parts.find(p => p.type === t)?.value;

    return {
      year: Number(pick("year")),
      month: Number(pick("month")),
      day: Number(pick("day")),
      hour: Number(pick("hour")),
      minute: Number(pick("minute")),
      second: Number(pick("second")),
      timezone
    };
  }

  
  static format(date, timezone, locale = "fr-FR") {
    const d = date instanceof Date ? date : new Date(date);
    return new Intl.DateTimeFormat(locale, {
      timeZone: timezone,
      dateStyle: "full",
      timeStyle: "long"
    }).format(d);
  }

  // Compare un instant affiché dans plusieurs fuseaux (retourne un tableau)
  static compare(date, timezones, locale = "fr-FR") {
    const d = date instanceof Date ? date : new Date(date);
    return timezones.map(tz => ({
      timezone: tz,
      offsetMinutes: TimezoneConverter.getOffset(d, tz),
      display: TimezoneConverter.format(d, tz, locale)
    }));
  }

 
  static zonedLocalToUtcMs(localISO, timezone) {
   
    const [datePart, timePart] = localISO.split("T");
    const [Y, M, D] = datePart.split("-").map(Number);
    const [h, m, s = 0] = timePart.split(":").map(Number);

    
    let guess = Date.UTC(Y, M - 1, D, h, m, s);

    
    for (let i = 0; i < 2; i++) {
      const off = TimezoneConverter.getOffset(new Date(guess), timezone);
      guess = Date.UTC(Y, M - 1, D, h, m, s) - off * 60000;
    }

    return guess;
  }
}


const now = new Date();
console.log("Paris:", TimezoneConverter.format(now, "Europe/Paris"));
console.log("New York:", TimezoneConverter.format(now, "America/New_York"));

console.log("Offset Paris (min):", TimezoneConverter.getOffset(now, "Europe/Paris"));
console.log("Offset Tokyo (min):", TimezoneConverter.getOffset(now, "Asia/Tokyo"));

console.log(TimezoneConverter.compare(now, ["Europe/Paris", "UTC", "America/New_York", "Asia/Tokyo"]));



class FlightDuration {
  constructor({ departureLocalISO, departureTZ, arrivalLocalISO, arrivalTZ }) {
    this.departureLocalISO = departureLocalISO; 
    this.departureTZ = departureTZ;             
    this.arrivalLocalISO = arrivalLocalISO;     
    this.arrivalTZ = arrivalTZ;                
  }

  getDuration() {
    const depUtc = TimezoneConverter.zonedLocalToUtcMs(this.departureLocalISO, this.departureTZ);
    const arrUtc = TimezoneConverter.zonedLocalToUtcMs(this.arrivalLocalISO, this.arrivalTZ);

    const diffMs = arrUtc - depUtc;
    const totalMin = Math.round(diffMs / 60000);

    const sign = totalMin < 0 ? -1 : 1;
    const absMin = Math.abs(totalMin);

    const hours = Math.floor(absMin / 60);
    const minutes = absMin % 60;

    return {
      minutes: sign * totalMin,
      hours,
      remainingMinutes: minutes,
      formatted: `${sign < 0 ? "-" : ""}${hours}h ${String(minutes).padStart(2, "0")}min`
    };
  }
}


const flight = new FlightDuration({
  departureLocalISO: "2026-01-21T09:00",
  departureTZ: "Europe/Paris",
  arrivalLocalISO: "2026-01-21T11:30",
  arrivalTZ: "Europe/London"
});

console.log("Durée vol:", flight.getDuration());
