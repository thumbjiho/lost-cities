import React from "react";

function NumberCell({ number, color, onSelect, selected }) {
  return (
    <div
      onClick={onSelect}
      className={`cell ${selected ? "selected" : ""}`}
      style={{ "--key-color": String(color) }}
    >
      {" "}
      {number}
    </div>
  );
}

export default NumberCell;
