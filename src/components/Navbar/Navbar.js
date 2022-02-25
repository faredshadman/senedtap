import React, { useState, useMemo } from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { NavLink as Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../images/logo.svg";
import { AiFillHeart } from "react-icons/ai";
const Navbar = ({ background }) => {
  const { docs } = useSelector((state) => state.filterdocs);
  const [click, setClick] = useState(false);
  const filteredDocs = useMemo(() => {
    return docs.filter((doc) => doc.fav === true);
  }, [docs]);
  return (
    <>
      <div className={background}>
        <nav className="navigation">
          <div className="nav_row">
            <div className="nav_col">
              <div className="nav_logo_wrap">
                <Link exact to="/">
                  <img className="nav_logo" src={logo} alt="Logo" />
                </Link>
              </div>
              <div className={click ? "nav_menu active" : "nav_menu"}>
                <ul className="nav_list">
                  <li className="nav_item">
                    <Link className="nav_links" exact to="/">
                      Ana səhifə
                    </Link>
                  </li>
                  <li className="nav_item">
                    <Link className="nav_links" to="/all-docs">
                      Bütün sənədlər
                    </Link>
                  </li>
                  <li className="nav_item">
                    <Link className="nav_links" to="/faq">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav_col second">
              <div className="nav_buttons">
                {filteredDocs.length > 0 ? (
                  <Link to="/favs">
                    <div className="nav__heart">
                      <AiFillHeart className="fill_heart heart" />
                      <span className="fav_count">{filteredDocs.length}</span>
                    </div>
                  </Link>
                ) : (
                  ""
                )}
                <Link to="/login">
                  <button className="btn-login">Daxil ol</button>
                </Link>
              </div>
              <div className="mobile_buttons" onClick={() => setClick(!click)}>
                {click ? (
                  <FaTimes className="fa_mobile" />
                ) : (
                  <FaBars className="fa_mobile" />
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
