import React from "react";
import { Link } from "react-router-dom";
import FooterEllipse from "../../images/footerellipse.svg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import NavLogo from "../NavLogo/NavLogo";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <img className="footer-svg" src={FooterEllipse} alt="FooterSvg" />
        <footer className="wrapper">
          <NavLogo />
          <div className="footer-row">
            <div className="footer-col flex">
              <div className="footer-col-inner">
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <Link className="footer-links" to="/">
                      <span className="span-hover">Terms</span> & Conditions
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link className="footer-links" to="/">
                      <span className="span-hover">Feedbacks</span> &
                      Testimonials
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link className="footer-links" to="/">
                      <span className="span-hover">Psycho</span>logists
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col-inner">
                <ul>
                  <li className="footer-list-item">
                    <Link className="footer-links" to="/">
                      <span className="span-hover">Privacy</span> Policy
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link className="footer-links" to="/">
                      <span className="span-hover">Download</span> Mobile Apps
                    </Link>
                  </li>
                  <li className="footer-list-item">
                    <Link className="footer-links" to="/">
                      <span className="span-hover">Start</span> as psycholog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col sub">
              <h1 className="footer-sub-heading">
                Heç bir yeniliyi qaçırmamaq üçün abunə ol!
              </h1>
              <div className="footer-col-input-group">
                <input
                  className="section_input"
                  type="text"
                  placeholder="E-poçt"
                />
                <button className="btn-primary">Abunə ol</button>
              </div>
            </div>
          </div>
          <div className="social-media">
            <p>Follow us on social media</p>
            <div className="social-media-wrapper">
              <FaFacebookF />
              <FaTelegramPlane />
              <FaLinkedinIn />
              <FaInstagram />
              <FaWhatsapp />
            </div>
          </div>
          <hr />
          <div className="website-rights">
            <span>Copyright © 2021 Sənədtap. Bütün hüquqlar qorunur.</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
