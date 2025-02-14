import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import React, { useEffect,  useState } from 'react';
 


import "react-big-calendar/lib/css/react-big-calendar.css";

// Initialize localizer
const localizer = momentLocalizer(moment);

const CustomCalendar = ({ events, addEvent, editEvent, deleteEvent }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
      />
      {selectedDate && <EventPopup date={selectedDate} addEvent={addEvent} />}
    </div>
  );
};

export default CustomCalendar;
