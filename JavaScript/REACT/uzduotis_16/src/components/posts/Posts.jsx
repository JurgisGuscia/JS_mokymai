import React, { useState, useEffect } from "react";
import Post from "../post/Post";
import "./posts.scss";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [output, setOutput] = useState("Loading");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
        setFetching(false);
      });
  }, []);

  useEffect(() => {
    if (fetching === false) {
      setOutput(
        posts.map((post, index) => {
          return <Post key={index} post={post} />;
        })
      );
    }
  }, [posts]);

  return <div className="postsContainer">{output}</div>;
}
