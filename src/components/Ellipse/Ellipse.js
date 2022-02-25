import React from "react";
import ellipse from "../../images/ellipse.svg";
import ellipsegroup from "../../images/ellipsegroupsvg.svg";
const Ellipse = () => {
  return (
    <>
      <img className="left_ellipse" src={ellipse} alt="Leftellipse" />
      <img className="right_ellipse" src={ellipsegroup} alt="Rightellipse" />
    </>
  );
};

export default Ellipse;
