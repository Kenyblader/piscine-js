class DateFormatter {
 
  static format(date, formatStr = "DD/MM/YYYY") {
    const d = date instanceof Date ? date : new Date(date);

    const pad2 = (n) => String(n).padStart(2, "0");

    const tokens = {
      YYYY: d.getFullYear(),
      MM: pad2(d.getMonth() + 1),
      DD: pad2(d.getDate()),
      HH: pad2(d.getHours()),
      mm: pad2(d.getMinutes()),
      ss: pad2(d.getSeconds())
    };

    return formatStr.replace(/YYYY|MM|DD|HH|mm|ss/g, (m) => tokens[m]);
  }


  static formatRelative(date) {
    const d = date instanceof Date ? date : new Date(date);
    const now = new Date();
    const diffMs = d.getTime() - now.getTime(); // futur + / passé -
    const abs = Math.abs(diffMs);

    const sec = Math.round(abs / 1000);
    const min = Math.round(sec / 60);
    const hr = Math.round(min / 60);
    const day = Math.round(hr / 24);

    const isFuture = diffMs > 0;

    const phrase = (n, unit) => {
      
      const s = n > 1 ? "s" : "";
      return isFuture ? `Dans ${n} ${unit}${s}` : `Il y a ${n} ${unit}${s}`;
    };

    if (sec < 45) return isFuture ? "Dans quelques secondes" : "Il y a quelques secondes";
    if (min < 45) return phrase(min, "minute");
    if (hr < 22)  return phrase(hr, "heure");
    return phrase(day, "jour");
  }
}


const maintenant = new Date();
const depuisString = new Date("2024-01-15");
const depuisComposants = new Date(2024, 0, 15, 14, 30); 
const depuisTimestamp = new Date(Date.now());


const d = new Date();
console.log(d.getFullYear());
d.setMonth(0); // Janvier
console.log(d.toLocaleString("fr-FR"));


console.log(DateFormatter.format(maintenant, "DD/MM/YYYY"));
console.log(DateFormatter.format(maintenant, "DD/MM/YYYY HH:mm:ss"));
console.log(DateFormatter.format(depuisString, "YYYY-MM-DD"));


console.log(DateFormatter.formatRelative(new Date(Date.now() - 2 * 60 * 1000))); 
console.log(DateFormatter.formatRelative(new Date(Date.now() + 3 * 60 * 60 * 1000))); 


