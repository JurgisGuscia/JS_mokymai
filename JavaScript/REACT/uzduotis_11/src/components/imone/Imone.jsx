import React, { useState } from "react";
import DarbuotojoIvedimas from "./DarbuotojoIvedimas";
import DarbuotojoSpausdinimas from "./DarbuotojoSpausdinimas";

export default function Imone() {
  const [darbuotojai, setDarbuotojai] = useState([]);
  function handleClearDarbuotojai() {
    setDarbuotojai([]);
  }
  return (
    <div>
      <h1>Imone</h1>
      {darbuotojai.length > 0 ? (
        <button onClick={handleClearDarbuotojai}>
          Isvalyti darbuotoju sarasa
        </button>
      ) : (
        ""
      )}
      <DarbuotojoIvedimas
        darbuotojai={darbuotojai}
        setDarbuotojai={setDarbuotojai}
      />
      <DarbuotojoSpausdinimas darbuotojai={darbuotojai} />
      <p>==================================================</p>
    </div>
  );
}
