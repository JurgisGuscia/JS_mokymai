import React from "react";
const zmoniuVardai = [
  "Jonas",
  "Petras",
  "Ona",
  "Marytė",
  "Agnė",
  "Gediminas",
  "Rokas",
  "Gabija",
  "Eglė",
  "Laura",
];

const callToTheBoard = () => {
  const rand = Math.floor(Math.random() * zmoniuVardai.length);
  alert(`Prie lentos eis:  ${zmoniuVardai[rand]}`);
};

export default function EinaPrieLentos() {
  return (
    <div>
      <h1>EinaPrieLentos</h1>
      <button onClick={callToTheBoard}>Kviesk prie lentos</button>
    </div>
  );
}
