import React, { useState } from "react";
import "./chatLink.scss";

export default function ChatLink({ data, setRefreshMessageHistoryDisplay }) {
  function handleChatLinkClick() {
    localStorage.setItem("activeChat", data.chatData._id);
    localStorage.setItem("partnerName", data.userData.username);
    localStorage.setItem("partnerAvatar", data.userData.avatar);
    setRefreshMessageHistoryDisplay((prev) => prev + 1);
  }
  return (
    <>
      <div className="chatListItem" onClick={handleChatLinkClick}>
        <img
          alt="profile"
          src={`data:image/png;base64,${data.userData.avatar}`}
        />
        <div className="chatListItemInfoContainer">
          <div className="usernameContainer">{data.userData.username}</div>
          <div className="lastMessageContainer">
            {/* TODO: iterpti paskutine pokalbio zinute */}
          </div>
          <div className="lastMessageDate">data</div>
        </div>
        <div className="unreadMessageIndicatorContainer">
          {/* <div className="unreadMessageIndicator"></div> */}
        </div>
      </div>
    </>
  );
}
