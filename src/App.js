import "./App.css";
import React from "react";
import CellGroup from "./components/CellGroup/CellGroup";
import PlayerSelect from "./components/PlayerSelect";
import Resetbutton from "./components/ResetButton";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const colors = {
    yellow: "#FFBA18",
    blue: "#0588F0",
    white: "#FFFFFF",
    green: "#3E9B4F",
    red: "#DC3E42",
    purple: "#8347B9",
  };

  const [columnScores, setColumnScores] = useState(
    Array(Object.keys(colors).length).fill(0)
  );
  const [totalScore, setTotalScore] = useState(0);
  const [resetTrigger, setResetTrigger] = useState(false);

  useEffect(() => {
    setTotalScore(columnScores.reduce((acc, num) => acc + num, 0));
  }, [columnScores, resetTrigger]);

  const resetGame = () => {
    setColumnScores(Array(Object.keys(colors).length).fill(0)); // ✅ Corrected column length
    setTotalScore(0);
    setResetTrigger((prev) => !prev); // Toggle reset trigger
  };

  return (
    <div className="App">
      <span className="title">Jojo's Lost Cities Calculator</span>
      <div className="columns">
        {Object.entries(colors).map(([name, hex], index) => (
          <CellGroup
            key={index}
            color={hex}
            columnIndex={index}
            setColumnScores={setColumnScores}
            resetTrigger={resetTrigger}
          />
        ))}
      </div>
      <div className="controls">
        <PlayerSelect totalScore={totalScore} />
        <Resetbutton
          onClick={resetGame}
          resetTrigger={resetTrigger}
        />
      </div>
    </div>
  );
}

export default App;
