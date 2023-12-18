import React from "react";
import Service from "../service/Service";
import "./services.css";

export default function Services() {
  return (
    <div className="servicesContainer">
      <h1>Mūsų paslaugos</h1>
      <div className="serviceListContainer">
        <Service title="Pirma paslauga" />
        <Service title="Antra paslauga" />
        <Service title="Trecia paslauga" />
      </div>
    </div>
  );
}
