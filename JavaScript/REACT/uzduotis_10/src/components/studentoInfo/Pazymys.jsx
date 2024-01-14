import React from "react";

export default function Pazymys(props) {
  return (
    <p>
      {props.pazymys} {props.pazymys >= 5 ? "Teigiamas" : "Neigiamas"}
    </p>
  );
}
