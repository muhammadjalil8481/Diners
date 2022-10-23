import React from "react";

const UnderLineHeading = ({text="Heading"}) => {
  return (
    <div className="ulh">
      <h3 className="ulh-heading">{text}</h3>
    </div>
  );
};

export default UnderLineHeading;
