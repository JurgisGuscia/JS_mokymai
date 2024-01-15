import React, { useState } from "react";
import ZodziuIvedimas from "./ZodziuIvedimas";

export default function ZodziuBendras() {
  const [zodziai, setZodziai] = useState([]);
  function rastiIlgiausia() {
    return zodziai.reduce((a, b) => (a.length < b.length ? b : a), "");
  }
  return (
    <div>
      <h1>Zodziai</h1>
      <ZodziuIvedimas zodziai={zodziai} setZodziai={setZodziai} />
      {zodziai.length === 0 ? (
        "Deja, nera ivestos informacijos"
      ) : (
        <>
          <ul>
            {zodziai.map((zodis, index) => {
              return <li key={index}>{zodis}</li>;
            })}
          </ul>
          <p>Ilgiausias zodis: {rastiIlgiausia()}</p>
        </>
      )}

      <p>==================================================</p>
    </div>
  );
}
