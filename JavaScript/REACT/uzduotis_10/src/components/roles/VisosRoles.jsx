import React from "react";
import Role from "./Role";

export default function VisosRoles() {
  return (
    <div>
      <h1>Visos roles</h1>
      <Role {...{ pavadinimas: "Administratorius", kiekis: 3 }} />
      <Role {...{ pavadinimas: "Moderatorius", kiekis: 8 }} />
      <Role {...{ pavadinimas: "Naudotojas", kiekis: 3511 }} />
      <p>==================================================</p>
    </div>
  );
}
