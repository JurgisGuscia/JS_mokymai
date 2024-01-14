import React from "react";

export default function Darbuotojas(props) {
  function tikrintiBonusa() {
    return props.bonusas === 0
      ? "Gaila :("
      : props.bonusas < 100
      ? "Bent ant kebabo uzmete"
      : "Nu, jau kazkas geriau";
  }
  return (
    <div>
      Darbuotojui: {props.darbuotojas} skiriama {props.bonusas} Eur premija
      <p>{tikrintiBonusa()}</p>
    </div>
  );
}
