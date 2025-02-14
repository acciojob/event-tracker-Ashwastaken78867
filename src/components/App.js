
import React, { useState } from "react";
import Calendar from "./Calendar.js";  
import Filters from "./Filters.js";  
import moment from "moment/moment";


const App = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const editEvent = (id, updatedEvent) => {
    setEvents(events.map(event => (event.id === id ? updatedEvent : event)));
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div>
      <h1>Event Tracker Calendar</h1>
      <Filters events={events} setEvents={setEvents} />
      <Calendar events={events} addEvent={addEvent} editEvent={editEvent} deleteEvent={deleteEvent} />
    </div>
  );
};

export default App;
