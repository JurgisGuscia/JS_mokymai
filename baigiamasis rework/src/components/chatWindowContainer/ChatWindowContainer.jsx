import React from "react";
import "./chatWindowContainer.scss";
import { useState, useEffect, useRef } from "react";
import Message from "../message/Message";

export default function ChatWindowContainer({
  user,
  allUsers,
  conversationsList,
  fullChatList,
  updates,
  refreshMessageHistoryDisplay,
}) {
  const bottomRef = useRef();
  const [convoData, setConvoData] = useState("");
  const [inputData, setInputData] = useState("");

  const [messageArray, setMessageArray] = useState("");
  const [conversationId, setCoversationId] = useState(
    localStorage.getItem("activeChat")
  );

  const [partnerAvatar, setParnerAvatar] = useState("");
  const [partnerUsername, setPartnerUsername] = useState("");

  if (partnerUsername !== localStorage.getItem("partnerName")) {
    setParnerAvatar(localStorage.getItem("partnerAvatar"));
    setPartnerUsername(localStorage.getItem("partnerName"));
  }
  async function getConvoHistory() {
    const response = await fetch(
      `http://localhost:8080/getConversationData/${conversationId}`
    );
    const conversationArray = await response.json();
    setConvoData(await conversationArray);
  }

  useEffect(() => {
    setCoversationId(localStorage.getItem("activeChat"));
  }, [refreshMessageHistoryDisplay]);

  useEffect(() => {
    getConvoHistory();
  }, [partnerUsername, updates, conversationId]);

  useEffect(() => {
    if (convoData) {
      if (Array.isArray(convoData.messages) && convoData.messages.length > 0) {
        const msgArray = convoData.messages;
        setMessageArray(
          msgArray.map((item, index) => {
            const messageCreator =
              item.author === localStorage.getItem("loggedInUserEmail");
            let showImage;
            if (index > 0) {
              showImage = msgArray[index].author != msgArray[index - 1].author;
            } else {
              showImage = true;
            }

            return (
              <Message
                key={index}
                user={user}
                item={item}
                messageMine={messageCreator}
                showImage={showImage}
              />
            );
          })
        );
      } else {
        setMessageArray("");
      }
    }
  }, [convoData, updates, conversationId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end", inline: "nearest" });
  }, [messageArray]);

  function handleInputData(event) {
    setInputData(event.target.value);
  }

  function handleSendMessageClick() {
    const now = new Date();

    const currentDateTime = now.toLocaleString();
    const whiteSpaceFreeString = inputData.trim();
    if (whiteSpaceFreeString && convoData._id) {
      const postBody = {
        convoId: convoData._id,
        author: localStorage.getItem("loggedInUserEmail"),
        time: currentDateTime,
        message: whiteSpaceFreeString,
      };
      fetch("http://localhost:8080/updateConversation", {
        method: "POST",
        body: JSON.stringify(postBody),
        headers: { "Content-Type": "application/json" },
      }).then(() => {
        //
      });
      setInputData("");
    }
  }

  return (
    <div className="chaWindowContainer">
      <div className="chatHeaderContainer">
        {partnerAvatar ? (
          <img alt="profile" src={`data:image/png;base64,${partnerAvatar}`} />
        ) : (
          ""
        )}
        <div className="chatHeaderNameContainer">{partnerUsername}</div>
      </div>
      <div className="chatMessagesContainer">
        {messageArray}
        <div ref={bottomRef} className="bottomAnchorPoint" />
      </div>
      <div className="chatInputContainer">
        <input type="text" value={inputData} onChange={handleInputData}></input>
        <button onClick={handleSendMessageClick}>Siųsti</button>
      </div>
    </div>
  );
}
