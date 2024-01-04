import React from "react";
const number = 5555;
const arLyginis = () => {
  return number % 2 === 0 ? "Taip" : "Ne";
};
const arTeigiamas = () => {
  return number === 0
    ? "Skaičius lygus 0"
    : number > 0
    ? "Skaičius teigimas"
    : "Skaičius neigamas";
};
export default function Skaicius() {
  return (
    <div>
      <p>Skaičius: {number}</p>
      <p>
        {arLyginis()}, {arTeigiamas()}
      </p>
      <br />
      =================================
    </div>
  );
}
