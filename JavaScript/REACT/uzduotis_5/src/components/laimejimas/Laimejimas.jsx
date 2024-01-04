import React from "react";
const alertWin = () => {
  alert("Jus laimejote 100 euru!");
};
export default function Laimejimas() {
  return (
    <div>
      <h1>Laimejimas</h1>
      <button onClick={alertWin}>Spausti</button>
    </div>
  );
}
