import React from "react";

export default function Delione(props) {
  function kokioSunkumo() {
    return props.delione.detaliu <= 500
      ? "Delione lengva"
      : props.delione.detaliu <= 1000
      ? "Delione vidutine"
      : "Delione sunki";
  }

  return (
    <div>
      Detaliu kiekis: {props.delione.detaliu}, aukstis: {props.delione.aukstis},
      plotis: {props.delione.plotis}. {kokioSunkumo()}
    </div>
  );
}
