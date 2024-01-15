import React from "react";

export default function DarbuotojoSpausdinimas({ darbuotojai }) {
  return (
    <div>
      {darbuotojai.length === 0 ? (
        "Siuo metu nera ivestu darbuotoju"
      ) : (
        <ul>
          {darbuotojai.map((darbuotojas, index) => {
            return (
              <li key={index}>
                {darbuotojas.vardas} {darbuotojas.pavarde}{" "}
                {darbuotojas.pareigos} uzdirba {darbuotojas.alga}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
