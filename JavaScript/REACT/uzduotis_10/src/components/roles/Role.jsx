import React from "react";

export default function Role(props) {
  return (
    <div>
      {props.pavadinimas} yra {props.kiekis}.
      {props.kiekis >= 20 ? "Daugoka" : "Galima ir daugiau"}
    </div>
  );
}
