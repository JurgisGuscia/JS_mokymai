import React from "react";
import Darbuotojas from "./Darbuotojas";

export default function Imone() {
  return (
    <div>
      <h1>Imone</h1>
      <Darbuotojas {...{ darbuotojas: "Vardenis Pavardenis", bonusas: 300 }} />
      <Darbuotojas {...{ darbuotojas: "Algis Greitai", bonusas: 700 }} />
      <Darbuotojas {...{ darbuotojas: "Zbignevas Zaraza", bonusas: 50 }} />
      <p>==================================================</p>
    </div>
  );
}
