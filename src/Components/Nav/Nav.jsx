import React from "react";
import logo from '../../assets/mes.png'
import './Nav.css'
function Nav() {
  return (
    <div className="nav">
      <div className="nav__blocks"><img src={logo} alt="" /></div>
      <div className="nav__blocks"></div>
      <div className="nav__blocks"></div>
    </div>
  );
}

export default Nav;
