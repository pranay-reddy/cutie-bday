import React from 'react';
import './Events.css';  // Assuming you have your styles in Events.css

const Events = () => {
  const events = [
    
    { id: 1, name: "New year", date: "2025-01-01", description: "Give me new year kisssss ." },
    { id: 2, name: "Anniversary", date: "2025-02-07", description: "Happy Anniversary cutipiee ." },
    { id: 3, name: "Valentines", date: "2025-02-14", description: "Happy valentines my adorable wifey ^3^ ." },
    { id: 4, name: "Cutie Birthday", date: "2025-12-08", description: "Happy birthday langg may this year be full of happiness" },
    { id: 5, name: "Christmas", date: "2025-12-25", description: " Where is my ampao" },
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
