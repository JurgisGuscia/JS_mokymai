import React from "react";

export default function Automobilis(props) {
  return (
    <div>
      {props.auto.marke} {props.auto.modelis} {props.auto.metai}{" "}
      {props.auto.rida} {props.auto.kaina}
    </div>
  );
}
