import React, { useRef, useState, useEffect } from "react";

export default function Prekes() {
  const [prekiuSarasas, setPrekiuSarasas] = useState([]);
  const prekesPavadinimas = useRef();
  const prekesKaina = useRef();
  const prekesKiekis = useRef();

  useEffect(() => {
    prekesPavadinimas.current.value = "";
    prekesKaina.current.value = "";
    prekesKiekis.current.value = "";
  }, [prekiuSarasas]);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      prekesPavadinimas.current.value &&
      prekesKaina.current.value &&
      prekesKiekis.current.value
    ) {
      const object = {
        pavadinimas: prekesPavadinimas.current.value,
        kaina: prekesKaina.current.value,
        kiekis: prekesKiekis.current.value,
      };
      setPrekiuSarasas((prev) => [...prev, object]);
    }
  }
  function sukurtiMazuLikuciuMasyva() {
    return prekiuSarasas.filter((item) => item.kiekis < 5);
  }
  function handleIsvalytiSarasa() {
    setPrekiuSarasas([]);
  }
  return (
    <div>
      <h1>Prekes</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <span style={{ display: "inline-block", width: 180 + "px" }}>
            Prekes pavadininimas:
          </span>
          <input type="text" ref={prekesPavadinimas} />
        </p>
        <p>
          <span style={{ display: "inline-block", width: 180 + "px" }}>
            Prekes kaina:
          </span>
          <input type="number" ref={prekesKaina} />
        </p>
        <p>
          <span style={{ display: "inline-block", width: 180 + "px" }}>
            Prekes kieki:
          </span>
          <input type="number" ref={prekesKiekis} />
        </p>
        <button>Skaiciuoti</button>
      </form>
      {prekiuSarasas.length > 0 ? (
        <>
          <div>
            <button onClick={handleIsvalytiSarasa}>
              Isvalyti prekiu sarasa
            </button>
            <br />
            Prekius sarasas: <br />
            {prekiuSarasas.map((item) => {
              return (
                <div key={Date()}>
                  {item.pavadinimas} {item.kaina} {item.kiekis}
                </div>
              );
            })}
          </div>
          <div>
            Prekes su mazais likuciais: <br />
            {sukurtiMazuLikuciuMasyva().map((item) => {
              return (
                <div>
                  {item.pavadinimas} {item.kaina} {item.kiekis}
                </div>
              );
            })}
          </div>
        </>
      ) : (
        "Kol kas nera ivestu prekiu"
      )}
      <p>======================================</p>
    </div>
  );
}
