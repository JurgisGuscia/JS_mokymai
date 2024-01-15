import React from "react";

export default function CounterMygtukai({ setCounter }) {
  return (
    <div>
      <button
        onClick={() => {
          setCounter((counter) => counter + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCounter((counter) => counter + 2);
        }}
      >
        +2
      </button>
      <button
        onClick={() => {
          setCounter((counter) => counter + 5);
        }}
      >
        +5
      </button>
    </div>
  );
}
