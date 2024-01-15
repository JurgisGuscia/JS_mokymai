import React, { useState } from "react";
import KnygosIvedimas from "./KnygosIvedimas";
import KnyguSpausdinimas from "./KnyguSpausdinimas";

export default function KnyguBendras() {
  const [knygos, setKnygos] = useState([]);
  function handleValytiKnygas() {
    setKnygos([]);
  }
  return (
    <div>
      <h1>Knygos</h1>
      {knygos.length > 0 ? (
        <button onClick={handleValytiKnygas}>Valyti masyva</button>
      ) : (
        ""
      )}
      <KnygosIvedimas knygos={knygos} setKnygos={setKnygos} />
      <KnyguSpausdinimas knygos={knygos} />
      <p>==================================================</p>
    </div>
  );
}
