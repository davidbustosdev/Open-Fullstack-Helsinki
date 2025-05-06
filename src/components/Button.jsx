import React from "react";

export const Button = ({ text, handleEvent }) => {
  return (
    <div>
      <button onClick={handleEvent}>{text}</button>
    </div>
  );
};
