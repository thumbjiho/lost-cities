import React, { useState, useEffect, useCallback } from "react";
import HandshakeCell from "../HandshakeCell";
import NumberCell from "../NumberCell";
import ScoreCell from "../ScoreCell";

const range = (n) => Array.from({ length: n }, (_, i) => i + 1);

function CellGroup({ color, columnIndex, setColumnScores, resetTrigger }) {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [handshakeCount, setHandshakeCount] = useState(0);
  const cardNumbers = range(10);

  const handleSelectNumber = (number) => {
    setSelectedNumbers((prev) =>
      prev.includes(number)
        ? prev.filter((n) => n !== number)
        : [...prev, number]
    );
  };

  const calculateScore = useCallback(() => {
    if (selectedNumbers.length === 0 && handshakeCount === 0) {
      return 0;
    }

    const baseScore = selectedNumbers.reduce((sum, num) => sum + num, 0) - 20;
    const handshakeMultiplier = handshakeCount > 0 ? handshakeCount + 1 : 1;
    const bonusScore = selectedNumbers.length > 7 ? 20 : 0;

    return baseScore * handshakeMultiplier + bonusScore;
  }, [selectedNumbers, handshakeCount]);

  const handleHandshake = () => {
    setHandshakeCount((prev) => (prev >= 3 ? 0 : prev + 1));
  };

  useEffect(() => {
    setColumnScores((prevScores) =>
      prevScores.map((score, i) =>
        i === columnIndex ? calculateScore() : score
      )
    );
  }, [calculateScore, selectedNumbers, handshakeCount, resetTrigger]);

  useEffect(() => {
    setSelectedNumbers([]);
    setHandshakeCount(0);
  }, [resetTrigger]);

  return (
    <div className={"cellGroup"}>
      <HandshakeCell
        color={color}
        onHandshake={handleHandshake}
        handshakeCount={handshakeCount}
      />
      {cardNumbers.map((number) => (
        <NumberCell
          key={number}
          number={number}
          color={color}
          onSelect={() => handleSelectNumber(number)}
          selected={selectedNumbers.includes(number)}
        />
      ))}
      <ScoreCell score={calculateScore()} />
    </div>
  );
}

export default CellGroup;
