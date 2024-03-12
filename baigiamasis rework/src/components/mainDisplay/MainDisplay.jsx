import React, { useEffect } from "react";
import "./mainDisplay.scss";
import ChatListContainer from "../chatListContainer/ChatListContainer";
import ChatWindowContainer from "../chatWindowContainer/ChatWindowContainer";
import ControlWindowContainer from "../controlWindowContainer/ControlWindowContainer";
import { useState } from "react";
export default function MainDisplay({
  user,
  allUsers,
  conversationsList,
  fullChatList,
  updates,
  refreshMessageHistoryDisplay,
  setRefreshMessageHistoryDisplay,
}) {
  const changeMessageDisplay = () => {
    setRefreshMessageHistoryDisplay((prev) => prev + 1);
  };
  return (
    <div className="mainDisplayContainer">
      <ChatListContainer
        user={user}
        allUsers={allUsers}
        conversationsList={conversationsList}
        fullChatList={fullChatList}
        setRefreshMessageHistoryDisplay={changeMessageDisplay}
        updates={updates}
      />
      <ChatWindowContainer
        user={user}
        allUsers={allUsers}
        conversationsList={conversationsList}
        fullChatList={fullChatList}
        updates={updates}
        refreshMessageHistoryDisplay={refreshMessageHistoryDisplay}
      />
      <ControlWindowContainer user={user} allUsers={allUsers} />
    </div>
  );
}
