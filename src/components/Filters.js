import React, { useState } from "react";

const Filters = ({ setParentFilters }) => {
  const [filters, setFilters] = useState("all"); // Define state for filters

  const handleFilterChange = (event) => {
    const newFilter = event.target.value;
    setFilters(newFilter); // Update local state
    setParentFilters(newFilter); // Update parent state if needed
  };

  return (
    <select onChange={handleFilterChange} value={filters}>
      <option value="all">All</option>
      <option value="upcoming">Upcoming</option>
    </select>
  );
};

export default Filters;
