import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BiEnvelope } from "react-icons/bi";
import "./Login.css";
import Logo from "../../images/logo.svg";
import LoginSvg from "../../images/login.svg";
import { Link } from "react-router-dom";
const Login = () => {
  const history = useHistory();
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
      <div />

      <div className="login_wrapper">
        <div className="login_left">
          <img src={LoginSvg} alt="Svg" />
        </div>
        <div className="login_right">
          <div className="login_form_wrapper">
            <div className="login_form_headline">
              <span onClick={() => history.push("/")}>
                <FiArrowLeft className="login_left_icon" />
              </span>
              <h2 className="login_form_heading">Daxil olun</h2>
            </div>
            <div className="login_form_info_wrapper">
              <p className="login_form_info">
                Sənədlərinizi yükləmək və ya gəlir əldə etmək üçün daxil olun.
              </p>
            </div>
            <div className="login_form">
              <form>
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
                <div className="forgot_pass_wrapper">
                  <Link className="forgot_pass" to="/">
                    Şifrəmi unutmuşam
                  </Link>
                </div>
                <div className="button_wrapper">
                  <button className="btn-login">Daxil ol</button>
                </div>
                <p className="form_signup">
                  Hesabınız yoxdur?
                  <span className="signup_link">
                    <Link to="/sign-up">Qeydiyyatdan keçin</Link>
                  </span>
                </p>
                <button className="btn-login google">
                  <FcGoogle className="google_icon" />
                  Google ilə daxil ol
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
