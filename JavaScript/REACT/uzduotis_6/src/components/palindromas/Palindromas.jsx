import React from "react";
const handleChange = (event) => {
  const string = event.target.value;
  const arr = string.split("");
  arr.reverse();
  const newStr = arr.join("");
  string === newStr
    ? console.log("Zodis yra palindromas")
    : console.log("Zodis nera palindromas");
};

export default function Palindromas() {
  return (
    <div>
      <h1>Palindromas</h1>
      <input type="text" onInput={handleChange}></input>
    </div>
  );
}
