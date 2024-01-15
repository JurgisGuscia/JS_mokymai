import React, { useRef, useEffect } from "react";

export default function KnygosIvedimas({ knygos, setKnygos }) {
  const name = useRef();
  const price = useRef();
  const year = useRef();
  useEffect(() => {
    name.current.value = "";
    price.current.value = "";
    year.current.value = "";
  }, [knygos]);
  function handleSubmit(e) {
    e.preventDefault();
    if (name.current.value && price.current.value && year.current.value) {
      const obj = {
        pavadinimas: name.current.value,
        kaina: price.current.value,
        metai: year.current.value,
      };
      setKnygos((prev) => [...prev, obj]);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <span style={{ display: "inline-block", width: 110 + "px" }}>
            Pavadinimas:
          </span>
          <input type="text" ref={name}></input>
        </p>
        <p>
          <span style={{ display: "inline-block", width: 110 + "px" }}>
            Kaina:
          </span>
          <input type="number" ref={price}></input>
        </p>
        <p>
          <span style={{ display: "inline-block", width: 110 + "px" }}>
            Metai:
          </span>
          <input type="number" ref={year}></input>
        </p>
        <button>Prideti knyga</button>
      </form>
    </div>
  );
}
