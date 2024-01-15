import React from "react";

export default function Image({ photo }) {
  return <img src={photo.url} alt={photo.title} />;
}
