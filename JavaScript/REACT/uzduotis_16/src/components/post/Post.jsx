import React from "react";

import "./post.scss";
export default function Post({ post }) {
  console.log(post);
  return (
    <div className="postDisplay">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
