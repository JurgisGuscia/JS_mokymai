import React, { useRef, useState } from "react";

export default function Kelione() {
  const [atstumoInfo, setAtstumoInfo] = useState();
  const [sanauduInfo, setSanauduInfo] = useState();
  const [kainosInfo, setKainosInfo] = useState();
  const atstumas = useRef();
  const sanaudos = useRef();
  const kaina = useRef();
  function handleClick() {
    setAtstumoInfo(atstumas.current.value);
    setSanauduInfo(sanaudos.current.value);
    setKainosInfo(kaina.current.value);
    atstumas.current.value = "";
    sanaudos.current.value = "";
    kaina.current.value = "";
  }
  function skaiciuotiKura() {
    return atstumoInfo * sanauduInfo;
  }
  function skaiciuotiKaina() {
    return skaiciuotiKura() * kainosInfo;
  }
  return (
    <div>
      <h1>Kelione</h1>
      <span style={{ display: "inline-block", width: 180 + "px" }}>
        Iveskite keliones atstuma:
      </span>
      <input id="kelionesAtstumas" type="number" ref={atstumas} />
      <br />
      <span style={{ display: "inline-block", width: 180 + "px" }}>
        Iveskite kuro sanaudas:
      </span>
      <input id="kuroSanaudos" type="number" ref={sanaudos} />
      <br />
      <span style={{ display: "inline-block", width: 180 + "px" }}>
        Iveskite kuro kaina:
      </span>
      <input id="kuroKaina" type="number" ref={kaina} />
      <br />
      <button onClick={handleClick}>Skaiciuoti</button>

      {atstumoInfo && sanauduInfo && kainosInfo ? (
        <>
          <p>
            Atstumas: {atstumoInfo}
            <br />
            Kuro sanaudos: {sanauduInfo}
            <br />
            Litro kaina: {kainosInfo}
          </p>
          <p>Kelionei reikes: {skaiciuotiKura()} litru kuro</p>
          <p>Kelione kainuos: {skaiciuotiKaina()} Eur.</p>
        </>
      ) : (
        ""
      )}
      <p>======================================</p>
    </div>
  );
}
