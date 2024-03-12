import React from "react";
import "./modalMessageWindow.scss";

export default function ModalMessageWindow({ message }) {
  return <div className="modalWindowContainer">{message}</div>;
}
