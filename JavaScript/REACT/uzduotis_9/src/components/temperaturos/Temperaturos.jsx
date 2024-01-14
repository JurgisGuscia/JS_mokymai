import React, { useRef, useState, useEffect } from "react";

export default function Temperaturos() {
  const temperatura = useRef();
  const [temperaturos, setTemperaturos] = useState([]);

  useEffect(() => {
    temperatura.current.value = "";
  }, [temperaturos]);

  function handleSubmit(e) {
    e.preventDefault();
    temperatura.current.value &&
      setTemperaturos((prev) => [...prev, temperatura.current.value]);
  }
  function skaiciuotiVidutine() {
    return (
      temperaturos.reduce((a, b) => parseInt(a) + parseInt(b)) /
      temperaturos.length
    );
  }
  function rastiZemiausia() {
    const sortedArray = temperaturos.toSorted((a, b) => a - b);
    console.log("zemiausia");
    return sortedArray[0];
  }
  function rastiAuskciausia() {
    const sortedArray = temperaturos.toSorted((a, b) => a - b);
    console.log("auskciausia");

    return sortedArray[sortedArray.length - 1];
  }
  function rastiSkirtuma() {
    console.log("skirtumas");
    console.log("------------------------------");
    return rastiAuskciausia() - rastiZemiausia();
  }
  return (
    <div>
      <h1>Temperaturos</h1>
      <form onSubmit={handleSubmit}>
        <span style={{ display: "inline-block", width: 180 + "px" }}>
          Iveskite temperatura
        </span>
        <input type="number" ref={temperatura} />
        <br />
        <button>Skaiciuoti</button>
      </form>
      {temperaturos.length !== 0 ? (
        <>
          <p>
            <span style={{ display: "inline-block", width: 180 + "px" }}>
              Temperaturu sarasas:
            </span>
            {temperaturos.map((item) => {
              return `${item},`;
            })}
          </p>
          <button
            onClick={() => {
              setTemperaturos([]);
            }}
          >
            Valyti sarasa
          </button>
          <p>
            <span style={{ display: "inline-block", width: 180 + "px" }}>
              Vidutine temperatura:
            </span>
            {skaiciuotiVidutine()}
          </p>
          <p>
            <span style={{ display: "inline-block", width: 180 + "px" }}>
              Auksciausia temperatura:
            </span>
            {rastiAuskciausia()}
          </p>

          <p>
            <span style={{ display: "inline-block", width: 180 + "px" }}>
              Zemiausia temperatura:
            </span>
            {rastiZemiausia()}
          </p>
          <p>
            <span style={{ display: "inline-block", width: 180 + "px" }}>
              Skirtumas:
            </span>
            {rastiSkirtuma()}
          </p>
        </>
      ) : (
        ""
      )}
      <p>
        <span style={{ display: "inline-block", width: 180 + "px" }}>
          Masyve yra:{` ${temperaturos.length} `}elementu.
        </span>
      </p>
      <p>======================================</p>
    </div>
  );
}
