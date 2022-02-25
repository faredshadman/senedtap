import React from "react";
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import meeting from "../../images/meeting.svg";
const FirstSection = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <header className="first_section">
          <div className="first_section_container">
            <div className="left_wrap">
              <div className="left_wrap_col first">
                <h1 className="title">Axtardığınız sənədİ bİr klİklə tapın!</h1>
              </div>
              <div className="left_wrap_col">
                <input
                  className="section_input"
                  type="text"
                  placeholder="Axtar..."
                />
                <button className="btn">
                  <AiOutlineSearch className="search_icon" />
                  Tap
                </button>
              </div>
            </div>
            <div className="right_wrap">
              <img className="right_img" src={meeting} alt="Meeting" />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default FirstSection;
