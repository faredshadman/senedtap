import React from "react";
import "./Sidebar.css";
import { BiChevronDown } from "react-icons/bi";
import {
  AiOutlineCheckSquare,
  AiFillCheckSquare,
  AiOutlineSearch,
} from "react-icons/ai";
import { filterDocs, filterDocsLang } from "../../stores/docs";
import {
  setFirstMenuClick,
  setFirstSubMenuClick,
  setSecondSubMenuClick,
  setThirdSubMenuClick,
  setOpenMenu,
  closeSubs,
} from "../../stores/sidebar";
import { useSelector, useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const {
    firstMenuClick,
    firstSubMenuClick,
    secondSubMenuClick,
    thirdSubMenuClick,
  } = useSelector((state) => state.sidebar);
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-menu">
          <div className="input-search">
            <input type="text" placeholder="Kateqoriya axtar..." />
            <AiOutlineSearch className="search-icon" />
          </div>

          <div className="main">
            <div
              className="check-text"
              onClick={() => dispatch(filterDocs("icare"))}
            >
              <div>
                {firstMenuClick ? (
                  <AiFillCheckSquare className="ai-fill" />
                ) : (
                  <AiOutlineCheckSquare className="ai-outline" />
                )}
                İcarə müqavilələri
              </div>

              <BiChevronDown
                onClick={() => {
                  dispatch(closeSubs());
                  dispatch(setFirstMenuClick());
                }}
              />
            </div>

            {firstMenuClick ? (
              <div className="subs">
                <div className="check-text">
                  <div>
                    {firstSubMenuClick ? (
                      <AiFillCheckSquare className="ai-fill" />
                    ) : (
                      <AiOutlineCheckSquare className="ai-outline" />
                    )}
                    Bütün icra sənədləri{" "}
                  </div>

                  <BiChevronDown
                    onClick={() => dispatch(setFirstSubMenuClick())}
                  />
                </div>
                {firstSubMenuClick ? (
                  <div className="subs">
                    <div className="check-text">
                      <div>
                        {" "}
                        {secondSubMenuClick ? (
                          <AiFillCheckSquare className="ai-fill" />
                        ) : (
                          <AiOutlineCheckSquare className="ai-outline" />
                        )}
                        Əmlak müqaviləsi
                      </div>

                      <BiChevronDown
                        onClick={() => dispatch(setSecondSubMenuClick())}
                      />
                    </div>
                    {secondSubMenuClick ? (
                      <div className="subs">
                        <div className="check-text">
                          <div>
                            {thirdSubMenuClick ? (
                              <AiFillCheckSquare className="ai-fill" />
                            ) : (
                              <AiOutlineCheckSquare className="ai-outline" />
                            )}{" "}
                            Əmlak subcategory
                          </div>

                          <BiChevronDown
                            onClick={() => dispatch(setThirdSubMenuClick())}
                          />
                        </div>
                        {thirdSubMenuClick ? (
                          <div className="subs">
                            <div className="check-text">
                              <div>
                                <AiOutlineCheckSquare className="ai-outline" />
                                Second subcategory
                              </div>

                              <BiChevronDown />
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}

                <div
                  className="check-text"
                  onClick={() => dispatch(filterDocs("sponsor"))}
                >
                  <div>
                    <AiOutlineCheckSquare className="ai-outline" />
                    Sponsor müqaviləsi
                  </div>
                  <BiChevronDown />
                </div>
                <div
                  className="check-text"
                  onClick={() => dispatch(filterDocs("kuryer"))}
                >
                  <div>
                    <AiOutlineCheckSquare className="ai-outline" />
                    Kuryer
                  </div>

                  <BiChevronDown />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            className="main"
            onClick={() => {
              dispatch(closeSubs());
              dispatch(setOpenMenu());
            }}
          >
            <div
              onClick={() => dispatch(filterDocs("xidmet"))}
              className="check-text"
            >
              <div>
                <AiOutlineCheckSquare className="ai-outline" />
                Xidmət müqaviləsi
              </div>

              <BiChevronDown />
            </div>
          </div>
          <div
            className="main"
            onClick={() => {
              dispatch(closeSubs());
              dispatch(setOpenMenu());
            }}
          >
            <div
              onClick={() => dispatch(filterDocs("cv"))}
              className="check-text"
            >
              <div>
                {" "}
                <AiOutlineCheckSquare className="ai-outline" />
                CV şablonları
              </div>

              <BiChevronDown />
            </div>
          </div>
        </div>
      </div>
      <div className="langbar">
        <div className="langbar-menu">
          <div className="input-search">
            <input type="text" placeholder="Kateqoriya axtar..." />
            <AiOutlineSearch className="search-icon" />
          </div>
          <div className="main" onClick={() => dispatch(filterDocsLang("aze"))}>
            <div className="lang-wrapper">
              {firstMenuClick ? (
                <AiFillCheckSquare className="ai-fill" />
              ) : (
                <AiOutlineCheckSquare className="ai-outline" />
              )}
              Azərbaycanca
            </div>
          </div>
          <div className="main" onClick={() => dispatch(filterDocsLang("en"))}>
            <div className="lang-wrapper">
              {firstMenuClick ? (
                <AiFillCheckSquare className="ai-fill" />
              ) : (
                <AiOutlineCheckSquare className="ai-outline" />
              )}
              Ingiliscə
            </div>
          </div>
          <div className="main" onClick={() => dispatch(filterDocsLang("rus"))}>
            <div className="lang-wrapper">
              {firstMenuClick ? (
                <AiFillCheckSquare className="ai-fill" />
              ) : (
                <AiOutlineCheckSquare className="ai-outline" />
              )}
              Rusca
            </div>
          </div>
          <div
            className="main"
            onClick={() => dispatch(filterDocsLang("turk"))}
          >
            <div className="lang-wrapper">
              {firstMenuClick ? (
                <AiFillCheckSquare className="ai-fill" />
              ) : (
                <AiOutlineCheckSquare className="ai-outline" />
              )}
              Türkcə
            </div>
          </div>
          <div
            className="main"
            onClick={() => dispatch(filterDocsLang("alman"))}
          >
            <div className="lang-wrapper">
              {firstMenuClick ? (
                <AiFillCheckSquare className="ai-fill" />
              ) : (
                <AiOutlineCheckSquare className="ai-outline" />
              )}
              Almanca
            </div>
          </div>
        </div>
      </div>
      <div className="companybar">
        <div className="company-menu">
          <div className="input-search">
            <input type="text" placeholder="Kateqoriya axtar..." />
            <AiOutlineSearch className="search-icon" />
          </div>
          <div className="main">
            <div className="lang-wrapper">
              {firstMenuClick ? (
                <AiFillCheckSquare className="ai-fill" />
              ) : (
                <AiOutlineCheckSquare className="ai-outline" />
              )}
              Komtec LLC
            </div>
          </div>
          <div className="main">
            <div className="lang-wrapper">
              {firstMenuClick ? (
                <AiFillCheckSquare className="ai-fill" />
              ) : (
                <AiOutlineCheckSquare className="ai-outline" />
              )}
              Azersun
            </div>
          </div>
          <div className="main">
            <div className="lang-wrapper">
              {firstMenuClick ? (
                <AiFillCheckSquare className="ai-fill" />
              ) : (
                <AiOutlineCheckSquare className="ai-outline" />
              )}
              Gilan
            </div>
          </div>
        </div>
      </div>
      <div className="tagbar">
        <div className="tagbar-menu">
          <div className="input-search">
            <input
              onChange={(e) => {
                dispatch(filterDocs(e.target.value));
              }}
              type="text"
              placeholder="Kateqoriya axtar..."
            />
            <AiOutlineSearch className="search-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
