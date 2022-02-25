import React from "react";
import "./NavLogo.css";
import WhiteLogo from "../../images/whitelogo.svg";
const NavLogo = () => {
  return (
    <>
      <div className="nav_logo_row">
        <img src={WhiteLogo} alt="Logo" />
      </div>
    </>
  );
};

export default NavLogo;
