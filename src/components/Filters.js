import React, { useState } from "react";
import moment from "moment";

const Filters = ({ events, setEvents }) => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const filteredEvents = events.filter((event) => {
    if (filter === "Past") return moment(event.start).isBefore(moment());
    if (filter === "Upcoming") return moment(event.start).isAfter(moment());
    return true;
  });

  setEvents(filteredEvents);

  return (
    <div>
      <button onClick={() => handleFilterChange("All")}>All</button>
      <button onClick={() => handleFilterChange("Past")}>Past</button>
      <button onClick={() => handleFilterChange("Upcoming")}>Upcoming</button>
    </div>
  );
};

export default Filters;
