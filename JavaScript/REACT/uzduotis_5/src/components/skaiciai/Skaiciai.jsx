import React from "react";
const atsitiktiniaiSveiki = [];
for (let i = 0; i < 20; i++) {
  let atsitiktinisSkaicius = Math.floor(Math.random() * 10) + 1;
  atsitiktiniaiSveiki.push(atsitiktinisSkaicius);
}
const getSum = () => {
  let sum = atsitiktiniaiSveiki.reduce((a, b) => a + b);
  alert(sum);
};

const getMax = () => {
  const newArr = atsitiktiniaiSveiki.toSorted((a, b) => a - b);
  alert(newArr[newArr.length - 1]);
};

export default function Skaiciai() {
  return (
    <div>
      <h1>Skaiciai</h1>
      Skaiciu masyvas = {atsitiktiniaiSveiki}
      <br />
      <button onClick={getSum}>Skaiciuoti suma</button>
      <button onClick={getMax}>Rasti didziausia</button>
    </div>
  );
}
