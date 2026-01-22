class DateUtils {
  static diff(date1, date2, unit = "ms") {
    const d1 = date1 instanceof Date ? date1 : new Date(date1);
    const d2 = date2 instanceof Date ? date2 : new Date(date2);

    const ms = d2.getTime() - d1.getTime(); // d2 - d1

    switch (unit) {
      case "ms": return ms;
      case "s": return ms / 1000;
      case "min": return ms / (1000 * 60);
      case "h": return ms / (1000 * 60 * 60);
      case "d": return ms / (1000 * 60 * 60 * 24);
      default:
        throw new Error("Unit invalide: ms | s | min | h | d");
    }
  }

  static add(date, amount, unit = "d") {
    const d = date instanceof Date ? new Date(date) : new Date(date);

    switch (unit) {
      case "ms": d.setTime(d.getTime() + amount); break;
      case "s": d.setSeconds(d.getSeconds() + amount); break;
      case "min": d.setMinutes(d.getMinutes() + amount); break;
      case "h": d.setHours(d.getHours() + amount); break;
      case "d": d.setDate(d.getDate() + amount); break;
      case "m": d.setMonth(d.getMonth() + amount); break; // mois
      case "y": d.setFullYear(d.getFullYear() + amount); break; // années
      default:
        throw new Error("Unit invalide: ms | s | min | h | d | m | y");
    }

    return d;
  }

  static subtract(date, amount, unit = "d") {
    return DateUtils.add(date, -amount, unit);
  }

  static startOf(date, unit = "d") {
    const d = date instanceof Date ? new Date(date) : new Date(date);

    switch (unit) {
      case "d":
        d.setHours(0, 0, 0, 0);
        return d;
      case "m":
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        return d;
      case "y":
        d.setMonth(0, 1);
        d.setHours(0, 0, 0, 0);
        return d;
      default:
        throw new Error("Unit invalide: d | m | y");
    }
  }

  static endOf(date, unit = "d") {
    // fin = début de la période suivante - 1 ms
    const d = date instanceof Date ? new Date(date) : new Date(date);

    if (unit === "d") {
      const next = DateUtils.add(DateUtils.startOf(d, "d"), 1, "d");
      return new Date(next.getTime() - 1);
    }
    if (unit === "m") {
      const next = DateUtils.add(DateUtils.startOf(d, "m"), 1, "m");
      return new Date(next.getTime() - 1);
    }
    if (unit === "y") {
      const next = DateUtils.add(DateUtils.startOf(d, "y"), 1, "y");
      return new Date(next.getTime() - 1);
    }

    throw new Error("Unit invalide: d | m | y");
  }

  static isBefore(date1, date2) {
    return new Date(date1).getTime() < new Date(date2).getTime();
  }

  static isAfter(date1, date2) {
    return new Date(date1).getTime() > new Date(date2).getTime();
  }

  static isBetween(date, start, end, inclusive = true) {
    const t = new Date(date).getTime();
    const a = new Date(start).getTime();
    const b = new Date(end).getTime();
    const [min, max] = a <= b ? [a, b] : [b, a];

    return inclusive ? (t >= min && t <= max) : (t > min && t < max);
  }
}


const d1 = new Date("2024-01-01T00:00:00");
const d2 = new Date("2024-01-03T12:00:00");

console.log("Diff jours:", DateUtils.diff(d1, d2, "d")); // 2.5
console.log("Add 10 jours:", DateUtils.add(d1, 10, "d").toISOString());
console.log("Sub 1 mois:", DateUtils.subtract("2024-03-15", 1, "m").toISOString());

console.log("StartOf month:", DateUtils.startOf("2024-03-15T10:20:30", "m").toISOString());
console.log("EndOf day:", DateUtils.endOf("2024-03-15T10:20:30", "d").toISOString());

console.log("isBefore:", DateUtils.isBefore(d1, d2)); // true
console.log("isBetween:", DateUtils.isBetween("2024-01-02", d1, d2)); // true
