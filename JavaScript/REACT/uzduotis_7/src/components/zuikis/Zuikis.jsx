import React, { useState } from "react";

export default function Zuikis() {
  const [arPersoko, setPersoko] = useState(false);
  function exportPersoko() {
    return arPersoko === true ? "taip" : "ne";
  }
  function randomJump() {
    const num = Math.floor(Math.random() * 2);
    num === 0 ? setPersoko(true) : setPersoko(false);
  }
  return (
    <div>
      <h1>Zuikis</h1>
      <p>Ar zuikis persoko griovi - {exportPersoko()}</p>
      <button onClick={randomJump}>Atsitiktinis persokimas</button>
      <button
        onClick={() => {
          setPersoko(true);
        }}
      >
        Visada persoka
      </button>
      <br />
      ==================================================
    </div>
  );
}
