import React, { useState } from "react";

export default function Zodis() {
  const [zodis, setZodis] = useState("");
  return (
    <div>
      <h1>Zodis</h1>
      <p>Zodzio reiksme: {zodis}</p>
      <button onClick={() => setZodis("pomidoras")}>Pomidoras</button>
      <button onClick={() => setZodis("agurkas")}>agurkas</button>
      <br />
      ==================================================
    </div>
  );
}
