import React from 'react';
import './Events.css';

const Events = () => {
  const events = [
    { id: 1, name: "New Year", month: 1, day: 1, description: "Give me new year kisssss." },
    { id: 2, name: "Anniversary", month: 2, day: 7, description: "Happy Anniversary cutipiee." },
    { id: 3, name: "Valentines", month: 2, day: 14, description: "Happy Valentines my adorable wifey ^3^." },
    { id: 4, name: "Cutie Birthday", month: 12, day: 8, description: "Happy birthday langg may this year be full of happiness" },
    { id: 5, name: "Christmas", month: 12, day: 25, description: "Where is my ampao" },
  ];

  const today = new Date();

  // Compute next occurrence for each event
  const eventsWithNextDate = events.map(event => {
    let year = today.getFullYear();
    const eventDate = new Date(year, event.month - 1, event.day);

    // If this year's event has passed, move it to next year
    if (eventDate < today) {
      eventDate.setFullYear(year + 1);
    }

    return { ...event, nextDate: eventDate };
  });

  // Sort events by nearest upcoming date
  const sortedEvents = eventsWithNextDate.sort(
    (a, b) => a.nextDate - b.nextDate
  );

  return (
    <div className="events-container">
      <h1 className="events-header">Upcoming Events</h1>
      <ul className="events-list">
        {sortedEvents.map(event => (
          <li key={event.id} className="event-item">
            <h2 className="event-name">{event.name}</h2>
            <p className="event-date">{event.nextDate.toDateString()}</p>
            <p className="event-description">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
