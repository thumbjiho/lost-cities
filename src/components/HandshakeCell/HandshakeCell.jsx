import React from "react";
import { Handshake } from "lucide-react"; // Import the Hand icon from Lucide

function HandshakeCell({ color, onHandshake, handshakeCount }) {
  return (
    <div
      onClick={onHandshake}
      className={`cell ${handshakeCount ? "selected" : ""}`}
      style={{ "--key-color": String(color) }}
      handshake={handshakeCount}
    >
      <div className="icons">
        {handshakeCount === 0 ? (
          <Handshake
            size={16}
            color={color}
            strokeWidth={1.5}
            absoluteStrokeWidth={true}
          />
        ) : (
          [...Array(handshakeCount)].map((_, index) => (
            <Handshake
              key={index}
              size={16}
              color="black"
              strokeWidth={1.5}
              absoluteStrokeWidth={true}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default HandshakeCell;
