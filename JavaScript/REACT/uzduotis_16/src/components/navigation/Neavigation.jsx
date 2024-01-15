import React from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";

export default function Neavigation() {
  return (
    <div className="navigation">
      <Link className="link" to="/">
        Namai
      </Link>
      <Link className="link" to="/posts">
        Straipsniai
      </Link>
      <Link className="link" to="/users">
        Vartotojai
      </Link>
      <Link className="link" to="/photos">
        Nuotraukos
      </Link>
    </div>
  );
}
