import React from "react";
import "../css/header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="../../public/smoking-burger-with-lettuce-3624ld.png"></img>
      </div>

      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
