import React, { useState } from "react";

export default function GreicioMatuoklis() {
  const [greitis, setGreitis] = useState(0);
  function checkSpeed() {
    return greitis === 0
      ? "Stovite vietoje"
      : greitis < 30
      ? "Vaziuojate letai"
      : greitis < 60
      ? "Vaziuojate normaliu greiciu"
      : "Lekiat kaip vejas";
  }
  return (
    <div>
      <h1>GreicioMatuoklis</h1>
      <p>Greitis: {greitis}</p>
      <button onClick={() => setGreitis(0)}>0 km/h</button>
      <button onClick={() => setGreitis(10)}>10 km/h</button>
      <button onClick={() => setGreitis(50)}>50 km/h</button>
      <button onClick={() => setGreitis(90)}>90 km/h</button>

      <br />
      <p>Jus: {checkSpeed()}</p>
    </div>
  );
}
