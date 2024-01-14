import React from "react";
import Automobilis from "./Automobilis";

export default function Pardavejas() {
  const auto = {
    marke: "Audi",
    modelis: "A4",
    metai: "2018",
    rida: "98000",
    kaina: "13000",
  };
  return (
    <div>
      <h1>Automobilis</h1>
      <Automobilis {...{ auto }} />

      <p>==================================================</p>
    </div>
  );
}
