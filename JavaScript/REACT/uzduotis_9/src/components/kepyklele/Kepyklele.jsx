import React, { useRef, useState, useEffect } from "react";

export default function Kepyklele() {
  const [darbuotojuSkaicius, setDarbuotojuSkaicius] = useState("");
  const [darbutojasPerValanda, setDarbuotojasPerValanda] = useState("");
  const [darboValandos, setDarboValandos] = useState("");
  const [uzsakymai, setUzsakymai] = useState([]);
  const uzsakymoIvestis = useRef();

  useEffect(() => {
    uzsakymoIvestis.current.value = "";
  }, [uzsakymai]);

  function handleClick() {
    if (uzsakymoIvestis.current.value) {
      setUzsakymai((prev) => [...prev, uzsakymoIvestis.current.value]);
    }
  }
  function rastiUzsakymuSkaiciu() {
    return uzsakymai.reduce((a, b) => parseInt(a) + parseInt(b));
  }
  function rastiKepyklosPajeguma() {
    return darbuotojuSkaicius * darbutojasPerValanda * darboValandos;
  }
  return (
    <div>
      <h1>Kepyklele</h1>
      <p>
        <span style={{ display: "inline-block", width: 250 + "px" }}>
          Darbuotoju skaicius:
        </span>
        <input
          type="number"
          value={darbuotojuSkaicius}
          onInput={(e) => setDarbuotojuSkaicius(e.target.value)}
        />
      </p>
      <p>
        <span style={{ display: "inline-block", width: 250 + "px" }}>
          Kiek darbuotojas iskepa per valanda:
        </span>
        <input
          type="number"
          value={darbutojasPerValanda}
          onInput={(e) => setDarbuotojasPerValanda(e.target.value)}
        />
      </p>
      <p>
        <span style={{ display: "inline-block", width: 250 + "px" }}>
          Kiek yra darbo valandu:
        </span>
        <input
          type="number"
          value={darboValandos}
          onInput={(e) => setDarboValandos(e.target.value)}
        />
      </p>
      <p>
        <span style={{ display: "inline-block", width: 250 + "px" }}>
          Prideti uzsakymus:
        </span>
        <input type="number" ref={uzsakymoIvestis} />
        <button onClick={handleClick}>Prideti uzsakyma</button>
      </p>

      {uzsakymai.length > 0 ? (
        <>
          <p>Uzsakymu sarasas: {uzsakymai.map((item) => `${item}, `)}</p>
          <p>Viso uzsakymu: {rastiUzsakymuSkaiciu()}</p>
          {darbuotojuSkaicius && darbutojasPerValanda && darboValandos ? (
            <>
              <p>
                Kepyklos pajegumas: {rastiKepyklosPajeguma()} kepalu per valanda
              </p>
              <p>
                {rastiKepyklosPajeguma() >= rastiUzsakymuSkaiciu()
                  ? "Kepykla visus uzsakymus igyvendis."
                  : "Kepykla nespes igyvendinti visu uzsakymu."}
              </p>
            </>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
      <p>======================================</p>
    </div>
  );
}
