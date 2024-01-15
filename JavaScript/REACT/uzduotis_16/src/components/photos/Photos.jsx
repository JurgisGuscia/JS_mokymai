import React, { useState, useEffect } from "react";
import Image from "../image/Image";
import "./photos.scss";

export default function Photos() {
  const [photoArray, setPhotoArray] = useState([]);
  const [photoNumber, setPhotoNumber] = useState(1);
  const [output, setOutput] = useState("Loading");
  const [photoAmmount, setPhotoAmmount] = useState(6);
  function handleUzkrautiDaugiau() {
    setPhotoAmmount((prev) => prev + 5);
  }
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/1`)
      .then((response) => response.json())
      .then((json) => {
        setPhotoArray((prev) => [...prev, json]);
        setPhotoNumber((prev) => prev + 1);
      });
  }, []);

  useEffect(() => {
    if (photoNumber < photoAmmount) {
      fetch(`https://jsonplaceholder.typicode.com/photos/${photoNumber}`)
        .then((response) => response.json())
        .then((json) => {
          setPhotoArray((prev) => [...prev, json]);
          setPhotoNumber((prev) => prev + 1);
        });
    }
    setOutput(
      photoArray.map((photo, index) => {
        return <Image key={index} photo={photo} />;
      })
    );
  }, [photoArray, photoAmmount]);

  return (
    <div className="photoViewContainer">
      <button onClick={handleUzkrautiDaugiau}>Uzkrauti daugiau</button>
      <div className="photoContainer">{output}</div>
    </div>
  );
}
