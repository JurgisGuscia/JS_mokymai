import React, { useState } from "react";

export default function Begikai() {
  const [pirmasBegikas, setPirmasBegikas] = useState(1);
  const [antrasBegikas, setAntrasBegikas] = useState(1);

  function handlePirma(e) {
    setPirmasBegikas(e.target.value < 0 ? 0 : e.target.value);
  }
  function handleAntra(e) {
    setAntrasBegikas(e.target.value < 0 ? 0 : e.target.value);
  }
  function compare() {
    const pirmas = !parseInt(pirmasBegikas) ? 0 : parseInt(pirmasBegikas);
    const antras = !parseInt(antrasBegikas) ? 0 : parseInt(antrasBegikas);
    const greitesnis =
      pirmas === antras
        ? "Abu bėgikai atbėgo lygiai"
        : pirmas > antras
        ? `Pirmas buvo greitesnis ${pirmas - antras}s`
        : `Antras buvo greitesnis ${antras - pirmas}s`;
    console.log(greitesnis);
    console.log("=======");
    return greitesnis;
  }
  const output = compare();
  return (
    <div>
      <h1>Begikai</h1>
      <div>
        Pirmo begiko greitis:
        <input
          type="number"
          value={pirmasBegikas}
          onInput={handlePirma}
        ></input>
      </div>
      <div>
        Antro begiko greitis:
        <input
          type="number"
          onInput={handleAntra}
          value={antrasBegikas}
        ></input>
      </div>
      <p>{output}</p>
      <h1>=====================================</h1>
    </div>
  );
}
