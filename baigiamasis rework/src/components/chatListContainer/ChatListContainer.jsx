import React from "react";
import "./chatListContainer.scss";
import ChatLink from "../chatLink/ChatLink";
import { useState, useEffect } from "react";

export default function ChatListContainer({
  user,
  allUsers,
  conversationsList,
  fullChatList,
  setRefreshMessageHistoryDisplay,
  updates,
}) {
  const anotherLevelFunction = () => {
    setRefreshMessageHistoryDisplay();
  };
  const [chatState, setChatState] = useState();
  useEffect(() => {
    if (fullChatList.length >= 1) {
      setChatState(
        fullChatList.map((item) => {
          return (
            <ChatLink
              key={item.chatData._id}
              data={item}
              setRefreshMessageHistoryDisplay={anotherLevelFunction}
            />
          );
        })
      );
    }
  }, [fullChatList, updates, conversationsList]);
  return <div className="chatListContainer">{chatState ? chatState : ""}</div>;
}
