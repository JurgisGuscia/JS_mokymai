import React from "react";
import "./controlWindowContainer.scss";
import SubUserDisplay from "../subUserDisplay/SubUserDisplay";
import { useState, useEffect } from "react";
import ControlUserContainer from "../controlUserContainer/ControlUserContainer";
//get all registered users list

export default function ControlWindowContainer({ user, allUsers }) {
  const [userToShowAtControl, setUserShowAtControl] = useState();
  useEffect(() => {
    const shower = JSON.parse(localStorage.getItem("userToShow"));
    if (shower) {
      setUserShowAtControl(shower.userToShow);
    }
  }, []);

  let controlOutput;
  let outPut;
  if (Array.isArray(allUsers)) {
    controlOutput = (
      <ControlUserContainer user={user} partner={userToShowAtControl} />
    );
    outPut = allUsers.map((user, index) => {
      return (
        <SubUserDisplay
          key={user._id}
          user={user}
          index={index}
          setUserToShow={setUserShowAtControl}
          allUsers={allUsers}
        />
      );
    });
  }

  return (
    <div className="controlWindowContainer">
      <div className="userListContainer">{outPut}</div>
      <div className="userListControl">{controlOutput}</div>
    </div>
  );
}
