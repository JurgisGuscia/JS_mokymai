import React from "react";
import Salis from "./Salis";

export default function Pasaulis() {
  const salis = "Kanada";
  const zemynas = "Siaures Amerika";
  const saliesObj = { salis: "Brazilija", zemynas: "Pietu amerika" };
  return (
    <div>
      <h1>Pasaulis</h1>
      <Salis salis={"Lietuva"} zemynas={"Europa"} />
      <Salis salis={salis} zemynas={zemynas} />
      <Salis salis={saliesObj.salis} zemynas={saliesObj.zemynas} />
      <p>==================================================</p>
    </div>
  );
}
