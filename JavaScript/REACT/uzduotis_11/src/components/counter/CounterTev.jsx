import React, { useState } from "react";
import CounterMygtukai from "./CounterMygtukai";

export default function CounterTev() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <CounterMygtukai setCounter={setCounter} />
      <p>==================================================</p>
    </div>
  );
}
