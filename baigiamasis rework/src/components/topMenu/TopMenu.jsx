import React from "react";
import "./topMenu.scss";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopMenu({ toggleUserProfile, user }) {
  const navigate = useNavigate();
  const signOut = useSignOut();
  function handleSignOut() {
    signOut();
    localStorage.clear();
    navigate("/");
  }

  function handleUserMenuClick() {
    toggleUserProfile(true);
  }
  if (user.avatar) {
    return (
      <div className="topMenuContainer">
        <div className="userProfileContainer">
          <img
            onClick={handleUserMenuClick}
            alt="profile"
            src={`data:image/png;base64,${user.avatar}`}
          />
        </div>
        <button onClick={handleSignOut}>Atsijungti</button>
      </div>
    );
  } else {
    return (
      <div className="topMenuContainer">
        <div className="userProfileContainer"></div>
        <button onClick={handleSignOut}>Atsijungti</button>
      </div>
    );
  }
}
