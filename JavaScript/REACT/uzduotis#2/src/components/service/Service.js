import React from "react";
import "./service.css";

export default function Service({ title }) {
  return (
    <div className="serviceItem">
      <h2>{title}</h2>
      <p>Kazkoks paslaugos aprasymas.</p>
    </div>
  );
}
