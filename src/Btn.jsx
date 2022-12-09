import React, { useState } from "react";


function Btn() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className={isActive ? "outbox" : "inbox"}>
      <button onClick={handleToggle}>Toggle class</button>
    </div>
  );
}

export default Btn