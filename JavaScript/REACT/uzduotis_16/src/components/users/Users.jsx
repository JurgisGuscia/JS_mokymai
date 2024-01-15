import React, { useState, useEffect } from "react";
import User from "../user/User";
import "./users.scss";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [output, setOutput] = useState("Loading");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/`)
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setFetching(false);
      });
  }, []);

  useEffect(() => {
    if (fetching === false) {
      setOutput(
        users.map((user, index) => {
          return <User key={index} user={user} />;
        })
      );
    }
  }, [users]);
  return <div className="usersContainer">{output}</div>;
}
