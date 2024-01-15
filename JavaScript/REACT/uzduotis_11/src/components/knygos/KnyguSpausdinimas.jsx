import React from "react";

export default function KnyguSpausdinimas({ knygos }) {
  return (
    <div>
      {knygos.length > 0 ? (
        <ul>
          Knygu sarasas:
          {knygos.map((knyga, index) => {
            return (
              <li key={index}>
                {knyga.pavadinimas} kainuoja {knyga.kaina}, isleista:{" "}
                {knyga.metai}
              </li>
            );
          })}
        </ul>
      ) : (
        "Siuo metu nera ivestu knygu."
      )}
    </div>
  );
}
