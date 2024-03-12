import "./userProfile.scss";
import React, { useState } from "react";

import FileBase64 from "react-file-base64";

export default function UserProfile({ toggleUserProfile, user }) {
  const [imgUpload, setImgUpload] = useState("");
  function turnUserProfileOff() {
    toggleUserProfile(false);
  }
  function handleEditUsername() {
    const wrapper = document.getElementById("userUsername");
    wrapper.innerHTML = `<input type='text' id="userUsernameInput" value='${user.username}'>`;
  }

  function handleEditName() {
    const wrapper = document.getElementById("userName");
    wrapper.innerHTML = `<input type='text' id="userNameInput" value='${user.name}'>`;
  }

  function handleEditLastName() {
    const wrapper = document.getElementById("userLastName");
    wrapper.innerHTML = `<input type='text' id="userLastNameInput" value='${user.lastName}'>`;
  }

  function saveUserProfileChanges() {
    //change to refs

    const updateQuery = [];
    updateQuery.push({ userEmail: user.email });
    if (document.getElementById("userUsernameInput")) {
      updateQuery.push({
        userUsername: document.getElementById("userUsernameInput").value,
      });
    } else {
      updateQuery.push({ userUsername: user.username });
    }

    if (document.getElementById("userNameInput")) {
      updateQuery.push({
        userName: document.getElementById("userNameInput").value,
      });
    } else {
      updateQuery.push({ userName: user.name });
    }

    if (document.getElementById("userLastNameInput")) {
      updateQuery.push({
        userLastName: document.getElementById("userLastNameInput").value,
      });
    } else {
      updateQuery.push({ userLastName: user.lastName });
    }

    if (imgUpload) {
      updateQuery.push({ userImage: imgUpload });
    }

    const updateRequest = fetch("http://localhost:8080/updateProfile", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        updateQuery,
      }),
    });

    const sendUpdateRequest = async () => await updateRequest;

    sendUpdateRequest();

    if (document.getElementById("userUsernameInput")) {
      const wrapper = document.getElementById("userUsername");
      wrapper.innerHTML = document.getElementById("userUsernameInput").value;
    }
    if (document.getElementById("userNameInput")) {
      const wrapper = document.getElementById("userName");
      wrapper.innerHTML = document.getElementById("userNameInput").value;
    }
    if (document.getElementById("userLastNameInput")) {
      const wrapper = document.getElementById("userLastName");
      wrapper.innerHTML = document.getElementById("userLastNameInput").value;
    }

    toggleUserProfile(false);
  }
  return (
    <div className="userProfileContainer">
      <div className="backdrop"></div>
      <div className="userProfileWindow">
        <div className="userProfileRow firstProfileRow">
          <span className="userProfileNameSpace">
            <img src={`data:image/png;base64,${user.avatar}`} alt="profile" />
          </span>
          <span id="userAvatar" className="userProfileInfoSpace">
            <FileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) => setImgUpload({ selectedFile: base64 })}
            />
          </span>
        </div>
        <div className="userProfileRow">
          <span className="userProfileNameSpace">Elektroninis paštas:</span>
          <span className="userProfileInfoSpace">{user.email}</span>
        </div>
        <div className="userProfileRow">
          <span className="userProfileNameSpace">Vartotojo slapyvardis:</span>
          <span id="userUsername" className="userProfileInfoSpace">
            {user.username}
          </span>
          <img
            src="/img/edit.png"
            alt="edit field"
            onClick={handleEditUsername}
          ></img>
        </div>
        <div className="userProfileRow">
          <span className="userProfileNameSpace">Vardas:</span>
          <span id="userName" className="userProfileInfoSpace">
            {user.name}
          </span>
          <img
            src="/img/edit.png"
            alt="edit field"
            onClick={handleEditName}
          ></img>
        </div>
        <div className="userProfileRow">
          <span className="userProfileNameSpace">Pavardė:</span>
          <span id="userLastName" className="userProfileInfoSpace">
            {user.lastName}
          </span>
          <img
            src="/img/edit.png"
            alt="edit field"
            onClick={handleEditLastName}
          ></img>
        </div>
        <div className="userProfileRow">
          <span className="userProfileNameSpace">Paskyra aktyvi:</span>
          <span className="userProfileInfoSpace">
            {user.verifiedAccout ? "Taip" : "Ne"}
          </span>
        </div>

        <div className="userProfileRow">
          <span className="userProfileNameSpace">Paskyros teisės:</span>
          <span className="userProfileInfoSpace">{user.webAcces}</span>
        </div>
        <div className="userProfileButtonContainer">
          <button onClick={saveUserProfileChanges}>Išsaugoti</button>
          <button onClick={turnUserProfileOff}>Uzdaryti</button>
        </div>
      </div>
    </div>
  );
}
