import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiEnvelope } from "react-icons/bi";
import SignupSvg from "../../images/signup.svg";
import { Link } from "react-router-dom";

import Logo from "../../images/logo.svg";
const SignUp = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="login_row">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
      </div>
      <div className="signup_wrapper">
        <div className="signup_left">
          <div className="signup_form_wrapper">
            <div className="signup_form_headline">
              <span>
                <FiArrowLeft className="signup_left_icon" />
              </span>
              <h2 className="signup_form_heading">Qeydiyyat</h2>
            </div>
            <div className="signup_form_info_wrapper">
              <p className="signup_form_info">
                Sənədlərinizi yükləmək və ya gəlir əldə etmək üçün daxil olun.
              </p>
            </div>
            <div className="signup_form">
              <form>
                <div className="input_group">
                  <input
                    type="text"
                    placeholder="Ad və Soyad"
                    className="input_field"
                  />
                  <label className="input_label">
                    <span className="input_label_text">Ad və Soyad</span>
                  </label>
                  <span className="form_icon">
                    <CgProfile />
                  </span>
                </div>
                <div className="input_group">
                  <input
                    type="email"
                    placeholder="E-poçt"
                    className="input_field"
                  />
                  <label className="input_label">
                    <span className="input_label_text">E-poçt</span>
                  </label>
                  <span className="form_icon">
                    <BiEnvelope />
                  </span>
                </div>
                <div className="input_group">
                  <input
                    className="input_field"
                    type={click ? "text" : "password"}
                    placeholder="Şifrə"
                  />
                  <label className="input_label">
                    <span className="input_label_text">Şifrə</span>
                  </label>
                  <span className="form_icon" onClick={() => setClick(!click)}>
                    {click ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </span>
                </div>
                <div className="input_group">
                  <input
                    className="input_field"
                    type={click ? "text" : "password"}
                    placeholder="Şifrəni yenidən daxil et"
                  />
                  <label className="input_label">
                    <span className="input_label_text">
                      Şifrəni yenidən daxil et
                    </span>
                  </label>
                  <span className="form_icon" onClick={() => setClick(!click)}>
                    {click ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </span>
                </div>
                <div className="button_wrapper">
                  <button className="btn-login">Daxil ol</button>
                </div>
                <p className="form_signup">
                  Hesabınız var?
                  <span className="signup_link">
                    <Link to="/login">Daxil olun</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="signup_right">
          <img src={SignupSvg} alt="Svg" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
