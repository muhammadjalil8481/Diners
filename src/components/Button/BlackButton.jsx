import React from "react";

const BlackButton = ({ text = "Text" }) => {
  return <button className={`black-button `}>{text}</button>;
};

export default BlackButton;
