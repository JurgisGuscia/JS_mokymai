import React from "react";

export default function ControlUserContainer({ user, partner }) {
  function handleStartChat() {
    const getHostDataResponse = async () => {
      //create new conversation between hostUserObj and user
      const newConversation = {
        creator: user.email,
        partner: partner.email,
        createdTime: Date.now(),
      };
      const createConversation = fetch(
        `http://localhost:8080/createConversation/`,
        {
          method: "POST",
          body: JSON.stringify(newConversation),
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          // console.log(response);
          //return response;
        });

      const conversationCreationResponse = async () => await createConversation;
      conversationCreationResponse();
    };

    getHostDataResponse();
    //change mainState
  }
  if (partner) {
    return (
      <>
        <img
          alt="profile"
          src={`data:image/png;base64,${partner.avatar}`}
        ></img>
        <span>{partner.username}</span>
        <button id="startConversation" onClick={handleStartChat}>
          Pradėti pokalbį
        </button>
      </>
    );
  } else {
    return <></>;
  }
}
