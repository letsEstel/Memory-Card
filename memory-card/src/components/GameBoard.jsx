import { useState } from "react";
import GameCards from "./GameCards";
export default function GameBoard() {
  const [score, setScore] = useState(0);
  const [card, setCard] = useState([]);
  return (
    <>
      <h1>Score {score}</h1>
    </>
  );
}
