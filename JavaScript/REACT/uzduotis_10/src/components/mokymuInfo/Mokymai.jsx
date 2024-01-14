import React from "react";
import Modulis from "./Modulis";

export default function Mokymai() {
  let modulesArray = [
    {
      name: "Introduction to Programming",
      lengthHours: 3,
    },
    {
      name: "Web Development Basics",
      lengthHours: 5,
    },
    {
      name: "Data Structures and Algorithms",
      lengthHours: 8,
    },
    {
      name: "Machine Learning Fundamentals",
      lengthHours: 10,
    },
  ];
  return (
    <div>
      <h1>MokymuInfo</h1>
      {modulesArray.map((module, index) => {
        return <Modulis key={index} {...{ module }} />;
      })}
      <p>==================================================</p>
    </div>
  );
}
