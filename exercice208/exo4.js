class Calendar {
    events;
    constructor() {
        this.events = [];
    }
  addEvent(title, start, end, details) {
    // Ajouter un événement au calendrier
    const event = { title, start, end, details };
    const exist = this.events.find(e => e.title === title );
    if (exist) {
      console.log("Event already exists.");
      return;
    }
    this.events.push(event);
  } // Ajouter
  getEventsForDay(date) {
    return this.events.filter(
        event => 
            event.start.toDateString() <= date.toDateString() &&
            event.end.toDateString() >= date.toDateString()
    );
  } // Jour
  getEventsInRange(start, end) {
    return this.events.filter(
        event => event.start >= start && event.end <= end
    );
  } // Période
  getUpcomingEvents(limit) {
    const now = new Date();
    return this.events.filter(
        event => event.start > now
    ).slice(0, limit);
  } // À venir
  hasConflict(start, end) {
    return this.events.some(
        event => event.start < end && event.end > start
    );
  } // Conflit
  generateMonth(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthEvents = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const events = this.getEventsForDay(date);
      monthEvents.push({ date, events });
    }
    return monthEvents;
  } // Générer

  displayMonth(year, month) {
    const monthEvents = this.generateMonth(year, month);
    monthEvents.forEach(({ date, events }) => {
      console.log(`Events for ${date.toDateString()}:`);
      events.forEach(event => {
        console.log(` - ${event.title} (${event.start} to ${event.end}): ${event.details}`);
      });
    });
  } // Afficher
}

const test = () => {
    const calendar = new Calendar();
    calendar.addEvent("Meeting", new Date(2024, 5, 10, 10, 0), new Date(2024, 5, 10, 11, 0), "Project discussion");
    calendar.addEvent("Conference", new Date(2024, 5, 15, 9, 0), new Date(2024, 5, 17, 17, 0), "Tech conference");
    calendar.addEvent("Birthday Party", new Date(2024, 5, 20, 19, 0), new Date(2024, 5, 20, 23, 0), "At my place");
    console.log(calendar.displayMonth(2024, 5)); // Juin 2024
    console.log("Events on June 10, 2024:", calendar.getEventsForDay(new Date(2024, 5, 10)));
    console.log("Events from June 14 to June 16, 2024:", calendar.getEventsInRange(new Date(2024, 5, 14), new Date(2024, 5, 16)));
    console.log("Upcoming Events:", calendar.getUpcomingEvents(2));
    console.log("Conflict on June 10, 2024, 10:30-11:30:", calendar.hasConflict(new Date(2024, 5, 10, 10, 30), new Date(2024, 5, 10, 11, 30)));
    console.log("displayMonth:", calendar.displayMonth(2024, 5));

};

test();