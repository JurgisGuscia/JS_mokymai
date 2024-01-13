import React, { useState } from "react";

export default function Vistos() {
  const [kiausiniai, setKiausiniai] = useState(0);

  function handleKiausiniai(e) {
    setKiausiniai(e.target.value < 0 ? 0 : e.target.value);
  }
  const uzsakymuSkaicius = 20;

  function skaiciuotiUzsakyma() {
    const gautaKiausiniu = !parseInt(kiausiniai) ? 0 : parseInt(kiausiniai);
    return gautaKiausiniu >= uzsakymuSkaicius
      ? `Viskas gerai, perteklius: ${gautaKiausiniu - uzsakymuSkaicius}`
      : `Nespesim, truksta: ${uzsakymuSkaicius - gautaKiausiniu}`;
  }
  const suskaiciuotasAtsakymas = skaiciuotiUzsakyma();
  return (
    <div>
      <h1>Vistos</h1>
      <input
        type="number"
        value={kiausiniai}
        onInput={handleKiausiniai}
      ></input>
      <p>{suskaiciuotasAtsakymas}</p>
      <h1>=====================================</h1>
    </div>
  );
}
