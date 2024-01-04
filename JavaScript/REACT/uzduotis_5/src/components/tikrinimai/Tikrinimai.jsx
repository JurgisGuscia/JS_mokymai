import React from "react";
const number = 88;
const checkEven = () => {
  return number % 2 === 0
    ? alert("Skaicius yra lyginis")
    : alert("Skaicius yra nelyginis");
};
const checkGreater = () => {
  return number > 30
    ? alert("Skaicius didesnis uz 30")
    : alert("Skaicius yra mazesnis arba lygus 30");
};
const checkPrime = () => {
  if (number < 2) {
    alert("Skaicius nera pirminis");
  } else {
    let dividors = 0;
    for (let i = 1; i <= number; i++) {
      number % 1 === 0 && dividors++;
    }
    dividors === 2
      ? alert("skaicius yra pirminis")
      : alert("Skaicius nera pirminis");
  }
};

export default function Tikrinimai() {
  return (
    <div>
      <h1>Tikrinimai</h1>
      <p>Skaicius: {number}</p>
      <button onClick={checkEven}>Ar lyginis</button>
      <button onClick={checkGreater}>Ar didesnis</button>
      <button onClick={checkPrime}>Ar pirminis</button>
    </div>
  );
}
