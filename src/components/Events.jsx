import React from 'react';
import './Events.css';  // Assuming you have your styles in Events.css

const Events = () => {
  const events = [
    { id: 1, name: "Cutie Birthday", date: "2024-12-08", description: "Happy birthday langg may this year be full of happiness" },
    { id: 2, name: "Christmas", date: "2024-12-25", description: " Where is my ampao" },
    { id: 3, name: "New year", date: "2025-01-01", description: "Give me new year kisssss ." },
    { id: 4, name: "Anniversary", date: "2025-02-07", description: "Happy Anniversary cutipiee ." },
    { id: 5, name: "Valentines", date: "2025-02-14", description: "Happy valentines my adorable wifey ^3^ ." },
  ];

  return (
    <div className="events-container">
      <h1 className="events-header">Upcoming Events</h1>
      <ul className="events-list">
        {events.map(event => (
          <li key={event.id} className="event-item">
            <h2 className="event-name">{event.name}</h2>
            <p className="event-date">{event.date}</p>
            <p className="event-description">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
