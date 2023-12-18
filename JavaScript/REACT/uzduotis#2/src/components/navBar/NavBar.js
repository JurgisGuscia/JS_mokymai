import React from "react";
import "./navBar.css";

export default function NavBar() {
  return (
    <div className="navBarContainer">
      <h1>2 REACT Užduotis</h1>
      <ul className="navBarListContainer">
        <li id="home" className="navBarLinkItem">
          Home
        </li>
        <li id="header" className="navBarLinkItem">
          Header
        </li>
        <li id="services" className="navBarLinkItem">
          Services
        </li>
        <li id="aboutUs" className="navBarLinkItem">
          About Us
        </li>
        <li id="footer" className="navBarLinkItem">
          Footer
        </li>
      </ul>
    </div>
  );
}
