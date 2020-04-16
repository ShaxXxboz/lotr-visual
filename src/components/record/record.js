import React from "react";

import "./record.css";

const Record = ({ item, field, label }) => {
  if (!item[field]) {
    return null;
  }

  return (
    <p className="record">
      <span className="record-label">{label}: &nbsp;</span>
      <span className="record-field"> {item[field]}</span>
    </p>
  );
};

export default Record;
