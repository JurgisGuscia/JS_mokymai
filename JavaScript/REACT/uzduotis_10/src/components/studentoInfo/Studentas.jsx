import React from "react";
import Pazymys from "./Pazymys";

export default function Studentas() {
  const studentas = {
    vardas: "Justas",
    pavarde: "Sasnauskas",
    mokykla: "Dumblo pradine",
    programa: "Tiem be ateities",
  };
  const pazymiai = [5, 8, 9, 10, 5, 7, 8, 1, 2, 2, 8, 4, 6, 1];

  return (
    <div>
      <h1>StudentoInfo</h1>
      Ponas: {studentas.vardas} {studentas.pavarde} is {studentas.mokykla}{" "}
      mokosi programa - {studentas.programa} <br />
      Jo pazymiai:
      {pazymiai.map((pazymys, index) => {
        return <Pazymys key={index} {...{ pazymys }} />;
      })}
      <p>==================================================</p>
    </div>
  );
}
