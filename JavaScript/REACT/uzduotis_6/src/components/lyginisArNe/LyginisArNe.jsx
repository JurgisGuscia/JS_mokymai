import React from "react";
const handleChange = (event) => {
  event.target.value % 2 === 0
    ? console.log("Skaicius lyginis")
    : console.log("Skaicus nelyginis");
};
export default function LyginisArNe() {
  return (
    <div>
      <h1>LyginisArNe</h1>
      <input type="number" onInput={handleChange}></input>
    </div>
  );
}
