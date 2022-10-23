import React, { useState } from "react";

const NavBarHoverMenu = ({ show = false }) => {
  //   const [show, setShow] = useState(show);
  return (
    <>
      {/* {show && ( */}
      <div className="nbhm ">
        <li>Shirts</li>
        <li>T-Shirts</li>
        <li>Ethnic</li>
        <li>Trousers</li>
        <li>Suiting & Blazers</li>
        <li>Jeans</li>
        <li>Accessories</li>
        <li>Winter Wear</li>
      </div>
      {/* )} */}
    </>
  );
};

export default NavBarHoverMenu;
