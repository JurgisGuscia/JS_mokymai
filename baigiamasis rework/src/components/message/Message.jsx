import React from "react";
import "./message.scss";
export default function Message({ user, item, messageMine, showImage }) {
  return messageMine ? (
    <div className="messageRowContainerRight">
      <div className="userMessage">{item.message}</div>
      {showImage ? (
        <img alt="profile" src={`data:image/png;base64,${user.avatar}`} />
      ) : (
        <div className="fillerPicture"></div>
      )}
    </div>
  ) : (
    <div className="messageRowContainerLeft">
      {showImage ? (
        <img
          alt="profile"
          src={`data:image/png;base64,${localStorage.getItem("partnerAvatar")}`}
        />
      ) : (
        <div className="fillerPicture"></div>
      )}

      <div className="partnerMessage">{item.message}</div>
    </div>
  );
}
