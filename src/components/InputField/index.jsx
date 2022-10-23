import React from "react";

const InputField = ({ type = "text", label, placeholder = "placeholder" }) => {
  return (
    <div className="input-field">
      {label && <label for="input">{label}</label>}
      <input type={type} id="input" placeholder={placeholder} />
    </div>
  );
};

export default InputField;
