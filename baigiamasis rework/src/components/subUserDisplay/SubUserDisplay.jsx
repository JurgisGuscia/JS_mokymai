import React from "react";
import "./subUserDisplay.scss";

export default function SubUserDisplay({
  user,
  index,
  setUserToShow,
  allUsers,
}) {
  function handleUserSelectClick() {
    setUserToShow(allUsers[index]);
    localStorage.setItem(
      "userToShow",
      JSON.stringify({ userToShow: allUsers[index] })
    );
  }
  return (
    <div className="subUserDisplayContainer" onClick={handleUserSelectClick}>
      <img alt={"user profile"} src={`data:image/png;base64,${user.avatar}`} />
      <span>{user.username}</span>
    </div>
  );
}
