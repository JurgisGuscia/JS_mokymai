import React from "react";
const num = Math.floor(Math.random() * 10) + 1;
const checkWin = () => {
  num >= 5 ? alert("Jus laimejote") : alert("Jus pralaimejote");
};
export default function Sansas() {
  return (
    <div>
      <h1>Sansas</h1>
      <button onClick={checkWin}>Spausti</button>
    </div>
  );
}
