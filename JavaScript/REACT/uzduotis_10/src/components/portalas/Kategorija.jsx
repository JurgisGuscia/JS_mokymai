import React from "react";
import Naujiena from "./Naujiena";

export default function Kategorija() {
  let newsArray = [
    {
      name: "Breaking News 1",
      views: 1000,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis vel velit cursus bibendum.",
    },
    {
      name: "Technology Update",
      views: 500,
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      name: "World Events",
      views: 1200,
      text: "Vestibulum auctor justo in vehicula semper. Suspendisse potenti. Nam sed metus vel justo tristique fermentum.",
    },
  ];

  return (
    <div>
      <h1>Kategorija</h1>
      {newsArray.map((item, index) => {
        return <Naujiena key={index} {...{ item }} />;
      })}
      <p>==================================================</p>
    </div>
  );
}
