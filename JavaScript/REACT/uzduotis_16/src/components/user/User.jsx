import React from "react";
import "./user.scss";
export default function User({ user }) {
  return (
    <div className="userCard">
      <span>
        <b>Vardas: </b>
        {user.name}
      </span>
      <span>
        <b>Slapyvardis:</b> {user.username}
      </span>
      <span>
        <b>Svetaine: </b>
        {user.website}
      </span>
      <span>
        <b>El. pastas: </b>
        {user.email}
      </span>
      <span>
        <b>Telefonas:</b>
        {user.phone}
      </span>
      <span>
        <b>Adresas:</b> {user.address.city}
        {user.address.street}
        {user.address.suite}
      </span>
      <span>
        <b>Kompanija:</b>
        {user.company.name}
      </span>
      <span>
        <b>Verslas:</b>
        {user.company.bs}
      </span>
    </div>
  );
}
