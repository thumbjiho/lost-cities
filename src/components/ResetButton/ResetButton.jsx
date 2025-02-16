import React from "react";
import { RotateCcw } from "lucide-react";

function ResetButton({ onClick }) {
  return (
    <button
      className="reset button"
      onClick={onClick}
    >
      <RotateCcw
        size={16}
        strokeWidth={1.25}
        absoluteStrokeWidth
      />
    </button>
  );
}

export default ResetButton;
