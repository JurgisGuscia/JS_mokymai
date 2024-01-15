import React, { useRef, useEffect } from "react";

export default function DarbuotojoIvedimas({ darbuotojai, setDarbuotojai }) {
  //vardas pavarde pareigos atlyginimas
  const name = useRef();
  const surname = useRef();
  const position = useRef();
  const salary = useRef();
  useEffect(() => {
    name.current.value = "";
    surname.current.value = "";
    position.current.value = "";
    salary.current.value = "";
  }, [darbuotojai]);
  function handleSubmit(e) {
    e.preventDefault();
    if (
      name.current.value &&
      surname.current.value &&
      position.current.value &&
      salary.current.value
    ) {
      const naujasDarbuotojas = {
        vardas: name.current.value,
        pavarde: surname.current.value,
        pareigos: position.current.value,
        alga: salary.current.value,
      };
      setDarbuotojai((prev) => [...prev, naujasDarbuotojas]);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <span style={{ display: "inline-block", width: 110 + "px" }}>
            Vardas:
          </span>
          <input type="text" ref={name}></input>
        </p>
        <p>
          <span style={{ display: "inline-block", width: 110 + "px" }}>
            Pavarde:
          </span>
          <input type="text" ref={surname}></input>
        </p>
        <p>
          <span style={{ display: "inline-block", width: 110 + "px" }}>
            pareigos:
          </span>
          <input type="text" ref={position}></input>
        </p>
        <p>
          <span style={{ display: "inline-block", width: 110 + "px" }}>
            Atlyginimas:
          </span>
          <input type="number" ref={salary}></input>
        </p>
        <button>Isaugoti</button>
      </form>
    </div>
  );
}
