import React from "react";
import "./About.css";
import {
  AiOutlineArrowRight as Right,
  AiOutlineArrowUp as Up,
} from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlineLine } from "react-icons/ai";
import { setActiveTab, setClick } from "../../stores/about";
const About = () => {
  const { activeTab, click } = useSelector((state) => state.about);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container transparent">
        <div className="wrapper">
          <div className="about_container">
            <small className="about_container_headline">
              <AiOutlineLine className="line" />
              Haqqımızda məlumat
            </small>
            <div className="about_row first">
              <h2 className="about_heading">
                SənədTap sənədləşdirmə işlərinizi rahatlaşdırmaq üçün buradadır!
              </h2>
              <button
                onClick={() => dispatch(setClick())}
                className="btn outline"
              >
                Daha çox məlumat
                {click ? (
                  <Up className="btn-arrow" />
                ) : (
                  <Right className="btn-arrow" />
                )}{" "}
              </button>
            </div>
            <div className="about-nav-wrap">
              <nav className="about_nav">
                <ul className="about-nav-list">
                  <li
                    className={
                      "about-nav-item " + (activeTab === 1 ? "active" : "")
                    }
                    onClick={() => dispatch(setActiveTab(1))}
                  >
                    Biz kimik?
                  </li>
                  <li
                    className={
                      "about-nav-item " + (activeTab === 2 ? "active" : "")
                    }
                    onClick={() => dispatch(setActiveTab(2))}
                  >
                    Tariximiz
                  </li>
                  <li
                    className={
                      "about-nav-item " + (activeTab === 3 ? "active" : "")
                    }
                    onClick={() => dispatch(setActiveTab(3))}
                  >
                    Vizyonumuz
                  </li>
                </ul>
              </nav>
            </div>
            {activeTab === 1 ? (
              <>
                <div className="about_row">
                  <div className="about-col">
                    <div className="about-col-para">
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi ab molestias ad iusto culpa eaque! Aut qui
                        libero, vitae a mollitia, explicabo ex minus esse rerum
                        eveniet architecto molestias laboriosam?
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cumque, tempora praesentium. Corrupti culpa
                        aliquam explicabo modi consequuntur. Porro consequuntur,
                        officiis magni temporibus cum voluptatibus eos,
                        voluptatum accusantium magnam nostrum nemo dicta fugit
                        similique unde saepe dolore itaque. Fugiat, facilis nam.
                      </p>
                    </div>
                    <div className="about-col-list">
                      <ul>
                        <li>
                          Laoreet condimentum tristique nunc consectetur semper
                          semper nulla.
                        </li>
                        <li>Laoreet condimentum tristique.</li>
                        <li>Laoreet condimentum tristique nunc r nulla.</li>
                        <li>
                          Laoreet condimentum sempe tristique nunc consectetur
                          semper semper nulla.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="about-col ">
                    <div className="video-wrapper">
                      <div>
                        <BsFillPlayCircleFill className="play_btn" />
                      </div>
                      <iframe
                        className="video"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/xl2X-E5s1Sw?controls=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
            {activeTab === 2 ? (
              <>
                <div className="about_row">
                  <div className="about-col">
                    <div className="about-col-para">
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi ab molestias ad iusto culpa eaque! Aut qui
                        libero, vitae a mollitia, explicabo ex minus esse rerum
                        eveniet architecto molestias laboriosam?
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cumque, tempora praesentium. Corrupti culpa
                        aliquam explicabo modi consequuntur. Porro consequuntur,
                        officiis magni temporibus cum voluptatibus eos,
                        voluptatum accusantium magnam nostrum nemo dicta fugit
                        similique unde saepe dolore itaque. Fugiat, facilis nam.
                      </p>
                    </div>
                    <div className="about-col-list">
                      <ul>
                        <li>
                          Laoreet condimentum tristique nunc consectetur semper
                          semper nulla.
                        </li>
                        <li>Laoreet condimentum tristique.</li>
                        <li>Laoreet condimentum tristique nunc r nulla.</li>
                        <li>
                          Laoreet condimentum sempe tristique nunc consectetur
                          semper semper nulla.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="about-col ">
                    <div className="video-wrapper">
                      <div>
                        <BsFillPlayCircleFill className="play_btn" />
                      </div>
                      <iframe
                        className="video"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/lWA2pjMjpBs?controls=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
            {activeTab === 3 ? (
              <>
                <div className="about_row">
                  <div className="about-col">
                    <div className="about-col-para">
                      <p>
                        Lorem Ferid dolor sit amet consectetur adipisicing elit.
                        Deserunt ea quibusdam sequi reprehenderit qui magnam
                        consequuntur consequatur sunt mollitia in nostrum atque
                        amet ipsa eius fugiat, recusandae aspernatur architecto
                        ipsum?
                      </p>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Error ea non omnis distinctio eveniet maxime
                        nobis. Amet, itaque harum? Quod? Lorem ipsum dolor sit,
                        amet consectetur adipisicing elit. Temporibus laboriosam
                        deleniti ratione eligendi eius at iste corporis dicta
                        optio vero?
                      </p>
                    </div>
                    <div className="about-col-list">
                      <ul>
                        <li>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Dolorem, ipsum?
                        </li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aliquam.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="about-col ">
                    <div className="video-wrapper">
                      <div>
                        <BsFillPlayCircleFill className="play_btn" />
                      </div>
                      <iframe
                        className="video"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/uxpDa-c-4Mc?controls=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
