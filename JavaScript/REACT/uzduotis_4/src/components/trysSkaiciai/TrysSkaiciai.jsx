import React from "react";
const num1 = 55;
const num2 = 5;
const num3 = 9999;
const output = () => {
  return (
    <p>
      1 skaicius: {num1} <br /> 2 skaicius: {num2} <br /> 3 skaicius: {num3}
    </p>
  );
};
const findMax = () => {
  let max = num1;
  num2 > max ? (max = num2) : num3 > max && (max = num3);
  return max;
};
const findSum = () => {
  return num1 + num2 + num3;
};

export default function TrysSkaiciai() {
  return (
    <div>
      {output()}
      Didziausias skaicius: {findMax()} <br />
      Skaciu suma: {findSum()}
      <br />
      =================================
    </div>
  );
}
