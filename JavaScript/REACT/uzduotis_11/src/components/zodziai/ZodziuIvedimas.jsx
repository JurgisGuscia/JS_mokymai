import React, { useRef, useEffect } from "react";

export default function ZodziuIvedimas({ zodziai, setZodziai }) {
  useEffect(() => {
    zodzioIvestis.current.value = "";
  }, [zodziai]);
  const zodzioIvestis = useRef();
  function handleIvedima() {
    if (zodzioIvestis.current.value !== "") {
      setZodziai((prev) => [...prev, zodzioIvestis.current.value]);
    }
  }
  return (
    <div>
      <input type="text" ref={zodzioIvestis}></input>
      <button onClick={handleIvedima}>Ivesti zodi</button>
    </div>
  );
}
