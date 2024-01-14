import React, { useState, useRef } from "react";

export default function MedzioApdirbejas() {
  const medziagos = useRef(0);
  const laikas = useRef(0);
  const valandinis = useRef(0);
  const [medziaguKaina, setMedziaguKaina] = useState(0);
  const [darboLaikas, setDarboLaikas] = useState(0);
  const [valandinisIkainis, setValandinisIkainis] = useState(0);
  function handleClick() {
    setMedziaguKaina(medziagos.current.value);
    setDarboLaikas(laikas.current.value);
    setValandinisIkainis(valandinis.current.value);
    medziagos.current.value = "";
    laikas.current.value = "";
    valandinis.current.value = "";
  }
  function skaiciuotiProjektoIslaidas() {
    return valandinisIkainis * darboLaikas + parseInt(medziaguKaina);
  }
  function skaiciuotiReikiamaPardavimoKaina() {
    return skaiciuotiProjektoIslaidas() * 1.3;
  }
  return (
    <div>
      <h1>Medzio apdirbejas</h1>
      <p>
        <span style={{ display: "inline-block", width: 180 + "px" }}>
          Islaidos medziagoms:
        </span>
        <input type="number" ref={medziagos} />
      </p>
      <p>
        <span style={{ display: "inline-block", width: 180 + "px" }}>
          Darbas uztruko valandu:
        </span>
        <input type="number" ref={laikas} />
      </p>
      <p>
        <span style={{ display: "inline-block", width: 180 + "px" }}>
          Valandinis ikainis:
        </span>
        <input type="number" ref={valandinis} />
      </p>
      <button onClick={handleClick}>Skaiciuoti</button>
      {medziaguKaina && darboLaikas && valandinisIkainis ? (
        <>
          <p>
            <span style={{ display: "inline-block", width: 180 + "px" }}>
              Islaidos medziagoms:
            </span>
            {medziaguKaina}
            <br />
            <span style={{ display: "inline-block", width: 180 + "px" }}>
              Darbas uztruko valandu:
            </span>
            {darboLaikas}
            <br />
            <span style={{ display: "inline-block", width: 180 + "px" }}>
              Valandinis ikainis:
            </span>
            {valandinisIkainis}
            <br />
          </p>
          <p>
            <span style={{ display: "inline-block", width: 180 + "px" }}>
              Projekto islaidos:
            </span>
            {skaiciuotiProjektoIslaidas()}
            <br />
            <span style={{ display: "inline-block", width: 180 + "px" }}>
              Reikiama pardavimo kaina:
            </span>
            {skaiciuotiReikiamaPardavimoKaina()}
            <br />
          </p>
        </>
      ) : (
        ""
      )}
      <p>======================================</p>
    </div>
  );
}
