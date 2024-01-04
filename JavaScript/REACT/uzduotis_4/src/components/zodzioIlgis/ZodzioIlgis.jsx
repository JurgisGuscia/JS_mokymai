import React from "react";

const zodis = "pasikiskiakopusteliaudamas";
const getLength = () => {
  return zodis.length;
};

export default function ZodzioIlgis() {
  return (
    <div>
      <p>Zodis: {zodis}</p>
      <p>Jo ilgis: {getLength()}</p>
      <br />
      =================================
    </div>
  );
}
