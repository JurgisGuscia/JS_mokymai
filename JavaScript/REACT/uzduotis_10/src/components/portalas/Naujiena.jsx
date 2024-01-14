import React from "react";

export default function Naujiena(props) {
  return (
    <div>
      <h2>
        {props.item.name} {props.item.views >= 1000 ? "HOT" : ""}
      </h2>
      <p>{props.item.text}</p>
    </div>
  );
}
