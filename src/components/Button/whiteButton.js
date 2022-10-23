import React from "react";

const WhiteButton = ({ text = "Text", border }) => {
  return (
    <button className={`white-button ${border && "border-black"}`}>
      {text}
    </button>
  );
};

export default WhiteButton;
