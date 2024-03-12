import "./home.scss";
import TopMenu from "../../components/topMenu/TopMenu";
import MainDisplay from "../../components/mainDisplay/MainDisplay";
import React, { useState, useRef, useEffect } from "react";
import UserProfile from "../userProfile/UserProfile";
import EventSource from "eventsource-polyfill";

export default function Home({ loggedUserEmail }) {
  const [user, setUser] = useState("");
  const [updates, setUpdates] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [conversationsList, setConversationsList] = useState([]);
  const [refreshMessageHistoryDisplay, setRefreshMessageHistoryDisplay] =
    useState(1);
  useEffect(() => {
    if (user) {
      const getAllUsers = fetch(
        `http://localhost:8080/getAllUsers/${user.email}`
      );

      const userListArray = async () => {
        const data = await getAllUsers;
        await data
          .json()
          .then((data) => {
            setAllUsers(data);
            localStorage.setItem(
              "userToShow",
              JSON.stringify({ userToShow: data[0] })
            );
          })
          .catch((err) => err);
      };
      userListArray();
    }
  }, [user, updates]);

  useEffect(() => {
    const conversationList = fetch(
      `http://localhost:8080/getConversations/${user.email}`
    );

    const data = conversationList.then((data) =>
      data.json().then((data) => {
        setConversationsList(data);
      })
    );
  }, [user, updates]);
  const [fullChatList, setFullChatList] = useState([]);

  const loggedUser = user.email;
  const getConversations = async () => {
    const exportString = conversationsList.map(async (convo) => {
      const partnerUser =
        convo.partner === loggedUser ? convo.creator : convo.partner;
      const newData = fetch(`http://localhost:8080/getUserInfo/${partnerUser}`);
      const userInfo = await newData.then((data) =>
        data.json().then((data) => {
          return data;
        })
      );
      await userInfo;
      return { userData: userInfo, chatData: convo };
    });
    setFullChatList(
      await Promise.all(exportString).then((values) => {
        return values;
      })
    );
  };
  useEffect(() => {
    getConversations();
  }, [conversationsList, updates]);

  useEffect(() => {
    //gauti prisijungusio vartotojo info
    fetch(
      `http://localhost:8080/getUserInfo/${localStorage.getItem(
        "loggedInUserEmail"
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.error(error));
  }, [updates]);

  useEffect(() => {
    //Sukurti SSE jungti
    const eventSource = new EventSource("http://localhost:8080/updates");

    eventSource.onmessage = (event) => {
      setUpdates((prevUpdates) => [...prevUpdates, event.data]);
      //console.log("updated");
    };

    eventSource.onerror = (error) => {
      console.error("Error with SSE:", error);
      eventSource.close();
    };

    // Cleanup when the component unmounts
    return () => {
      eventSource.close();
    };
  }, []);

  const [displayUserProfile, setDisplayUserProfile] = useState(false);
  let returnedJSX;
  if (displayUserProfile === true) {
    returnedJSX = (
      <div className="homeWrapper">
        <UserProfile toggleUserProfile={setDisplayUserProfile} user={user} />
        <TopMenu toggleUserProfile={setDisplayUserProfile} user={user} />
        <MainDisplay
          user={user}
          allUsers={allUsers}
          conversationsList={conversationsList}
          fullChatList={fullChatList}
          updates={updates}
          refreshMessageHistoryDisplay={refreshMessageHistoryDisplay}
          setRefreshMessageHistoryDisplay={setRefreshMessageHistoryDisplay}
        />
      </div>
    );
  } else {
    returnedJSX = (
      <div className="homeWrapper">
        <TopMenu toggleUserProfile={setDisplayUserProfile} user={user} />
        <MainDisplay
          user={user}
          allUsers={allUsers}
          conversationsList={conversationsList}
          fullChatList={fullChatList}
          updates={updates}
          refreshMessageHistoryDisplay={refreshMessageHistoryDisplay}
          setRefreshMessageHistoryDisplay={setRefreshMessageHistoryDisplay}
        />
      </div>
    );
  }

  return returnedJSX;
}
