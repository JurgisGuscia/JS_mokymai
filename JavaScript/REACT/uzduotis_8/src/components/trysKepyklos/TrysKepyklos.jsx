import React, { useState } from "react";

export default function TrysKepyklos() {
  const [uzsakymai, setUzsakymai] = useState(0);
  const [kepykla1, setKepykla1] = useState(0);
  const [kepykla2, setKepykla2] = useState(0);
  const [kepykla3, setKepykla3] = useState(0);
  function handleUzsakyma(e) {
    setUzsakymai(e.target.value < 0 ? 0 : e.target.value);
  }
  function handleKepykla1(e) {
    setKepykla1(e.target.value < 0 ? 0 : e.target.value);
  }
  function handleKepykla2(e) {
    setKepykla2(e.target.value < 0 ? 0 : e.target.value);
  }
  function handleKepykla3(e) {
    setKepykla3(e.target.value < 0 ? 0 : e.target.value);
  }
  function calculate() {
    const uzsakymas = !parseInt(uzsakymai) ? 0 : parseInt(uzsakymai);
    const pirmaKepykla = !parseInt(kepykla1) ? 0 : parseInt(kepykla1);
    const antraKepykla = !parseInt(kepykla2) ? 0 : parseInt(kepykla2);
    const treciaKepykla = !parseInt(kepykla3) ? 0 : parseInt(kepykla3);

    const bendrasKiekis = pirmaKepykla + antraKepykla + treciaKepykla;
    return bendrasKiekis >= uzsakymas
      ? "Speja"
      : `Nespeja, truks ${uzsakymas - bendrasKiekis}`;
  }
  const output = calculate();
  return (
    <div>
      <h1>TrysKepyklos</h1>
      Uzsakymas:{" "}
      <input type="number" value={uzsakymai} onInput={handleUzsakyma} />
      <br />
      Kepykla 1:{" "}
      <input type="number" value={kepykla1} onInput={handleKepykla1} />
      <br />
      Kepykla 2:{" "}
      <input type="number" value={kepykla2} onInput={handleKepykla2} />
      <br />
      Kepykla 3:{" "}
      <input type="number" value={kepykla3} onInput={handleKepykla3} />
      <br />
      <p>{output}</p>
      <h1>=====================================</h1>
    </div>
  );
}
