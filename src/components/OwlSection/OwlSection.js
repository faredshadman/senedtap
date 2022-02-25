import React from "react";
import profile from "../../images/photo_2021-06-08_13-31-56.jpg";
import stars from "../../images/stars.svg";
import { AiOutlineLine } from "react-icons/ai";
import "./OwlSection.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const options = {
  loop: true,
  stagePadding: 45,
  nav: true,
  autoplayTimeout: 10000,
  navText: [
    '<i class="fas fa-chevron-left"></i>',
    '<i class="fas fa-chevron-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 1,
    },
    640: {
      items: 2,
    },
    960: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
};
const OwlSection = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <small className="owl_container_headline">
            <AiOutlineLine className="line" />
            Fikirlər
          </small>
          <div className="owl_container_row">
            <h2 className="owl_container_heading">Onlar bizi seçirlər</h2>
          </div>
        </div>
        <OwlCarousel
          {...options}
          items="3"
          autoplay
          nav
          dots
          className="owl-theme"
        >
          <div className="item">
            <div className="item-col">
              <img className="item-profile-img" src={profile} alt="profile" />
            </div>
            <div className="item-col">
              <p className="item-body">
                Laoreet condimentum tristique nunc consectetur semper semper
                nulla laoreet elit. Neque velit amet lorem varius ac tempor
                egestas aenean. Vel ultricies nunc blandit proin.
              </p>
              <div>
                <span className="item-name">Ulviyya İmamova</span> -
                <span className="item-profession">Designer</span>
                <img className="stars" src={stars} alt="stars" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-col">
              <img className="item-profile-img" src={profile} alt="profile" />
            </div>
            <div className="item-col">
              <p className="item-body">
                Laoreet condimentum tristique nunc consectetur semper semper
                nulla laoreet elit. Neque velit amet lorem varius ac tempor
                egestas aenean. Vel ultricies nunc blandit proin.
              </p>
              <div>
                <span className="item-name">Fərid Şadmanlı</span> -{" "}
                <span className="item-profession">Developer</span>
                <img className="stars" src={stars} alt="stars" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-col">
              <img className="item-profile-img" src={profile} alt="profile" />
            </div>
            <div className="item-col">
              <p className="item-body">
                Laoreet condimentum tristique nunc consectetur semper semper
                nulla laoreet elit. Neque velit amet lorem varius ac tempor
                egestas aenean. Vel ultricies nunc blandit proin.
              </p>
              <div>
                <span className="item-name">Zaur Əliyev</span> -{" "}
                <span className="item-profession">Developer</span>
                <img className="stars" src={stars} alt="stars" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-col">
              <img className="item-profile-img" src={profile} alt="profile" />
            </div>
            <div className="item-col">
              <p className="item-body">
                Laoreet condimentum tristique nunc consectetur semper semper
                nulla laoreet elit. Neque velit amet lorem varius ac tempor
                egestas aenean. Vel ultricies nunc blandit proin.
              </p>
              <div>
                <span className="item-name">Yusif Bağıyev</span> -{" "}
                <span className="item-profession">Manager</span>
                <img className="stars" src={stars} alt="stars" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-col">
              <img className="item-profile-img" src={profile} alt="profile" />
            </div>
            <div className="item-col">
              <p className="item-body">
                Laoreet condimentum tristique nunc consectetur semper semper
                nulla laoreet elit. Neque velit amet lorem varius ac tempor
                egestas aenean. Vel ultricies nunc blandit proin.
              </p>
              <div>
                <span className="item-name">Ulviyya İmamova</span> -{" "}
                <span className="item-profession">Designer</span>
                <img className="stars" src={stars} alt="stars" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-col">
              <img className="item-profile-img" src={profile} alt="profile" />
            </div>
            <div className="item-col">
              <p className="item-body">
                Laoreet condimentum tristique nunc consectetur semper semper
                nulla laoreet elit. Neque velit amet lorem varius ac tempor
                egestas aenean. Vel ultricies nunc blandit proin.
              </p>
              <div>
                <span className="item-name">Ulviyya İmamova</span> -{" "}
                <span className="item-profession">Designer</span>
                <img className="stars" src={stars} alt="stars" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-col">
              <img className="item-profile-img" src={profile} alt="profile" />
            </div>
            <div className="item-col">
              <p className="item-body">
                Laoreet condimentum tristique nunc consectetur semper semper
                nulla laoreet elit. Neque velit amet lorem varius ac tempor
                egestas aenean. Vel ultricies nunc blandit proin.
              </p>
              <div>
                <span className="item-name">Ulviyya İmamova</span> -{" "}
                <span className="item-profession">Designer</span>
                <img className="stars" src={stars} alt="stars" />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-col">
              <img className="item-profile-img" src={profile} alt="profile" />
            </div>
            <div className="item-col">
              <p className="item-body">
                Laoreet condimentum tristique nunc consectetur semper semper
                nulla laoreet elit. Neque velit amet lorem varius ac tempor
                egestas aenean. Vel ultricies nunc blandit proin.
              </p>
              <div>
                <span className="item-name">Ulviyya İmamova</span> -{" "}
                <span className="item-profession">Designer</span>
                <img className="stars" src={stars} alt="stars" />
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default OwlSection;
