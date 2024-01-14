import React from "react";

export default function Salis({ salis, zemynas }) {
  return (
    <div>
      {salis} yra {zemynas} zemyne. {zemynas === "Europa" ? "Jega!!!" : ""}
    </div>
  );
}
