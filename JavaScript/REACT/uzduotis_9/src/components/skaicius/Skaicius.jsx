import React, { useRef, useState } from "react";

export default function Skaicius() {
  const [skaiciausReiksme, setSkaiciausReiksme] = useState(0);
  const skaiciausIvestis = useRef(0);
  function handleClick() {
    setSkaiciausReiksme(skaiciausIvestis.current.value);
    skaiciausIvestis.current.value = "";
  }
  function tikrintiTeigiama() {
    return skaiciausReiksme > 0;
  }
  function tikrintiLygini() {
    return skaiciausReiksme % 2 === 0;
  }
  return (
    <div>
      <h1>Skaicius</h1>
      <span style={{ display: "inline-block", width: 180 + "px" }}>
        Iveskite skaiciu:
      </span>
      <input ref={skaiciausIvestis} type="number" />
      <br />
      <button onClick={handleClick}>Skaiciuoti</button>
      {skaiciausReiksme ? (
        <>
          <p>{skaiciausReiksme}</p>
          <p>{tikrintiTeigiama() ? "Teigiamas" : "Neigiamas"}</p>
          <p>{tikrintiLygini() ? "Lyginis" : "Nelyginis"}</p>
        </>
      ) : (
        ""
      )}
      <p>======================================</p>
    </div>
  );
}
