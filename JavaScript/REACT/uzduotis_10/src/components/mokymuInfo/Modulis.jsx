import React from "react";

export default function Modulis(props) {
  return (
    <div>
      <p>Modulio pavadinimas: {props.module.name}</p>
      <p>Trukme: {props.module.lengthHours}</p>
    </div>
  );
}
