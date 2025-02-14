import React, { useState } from "react";
import Popup from "react-popup";
import moment from "moment";

const EventPopup = ({ date, addEvent }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSave = () => {
    if (title && location) {
      addEvent({
        id: Date.now(),
        title,
        location,
        start: date,
        end: date,
        color: moment(date).isBefore(moment()) ? "pink" : "green",
      });
      Popup.close();
    }
  };

  return (
    <Popup open={true} closeOnDocumentClick onClose={Popup.close}>
      <div className="popup-content">
        <h2>Create Event</h2>
        <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Event Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <button onClick={handleSave}>Save</button>
      </div>
    </Popup>
  );
};

export default EventPopup;
