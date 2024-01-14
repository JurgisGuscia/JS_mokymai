import React from "react";
import Delione from "./Delione";

export default function HobiuParduotuve() {
  const deliones = [
    {
      detaliu: 500,
      aukstis: 30,
      plits: 30,
    },
    {
      detaliu: 1500,
      aukstis: 70,
      plits: 80,
    },
    {
      detaliu: 2500,
      aukstis: 120,
      plits: 110,
    },
  ];
  return (
    <div>
      <h1>Hobiu parduotuve</h1>
      {deliones.map((delione, index) => {
        return <Delione key={index} {...{ delione }} />;
      })}
      <p>==================================================</p>
    </div>
  );
}
