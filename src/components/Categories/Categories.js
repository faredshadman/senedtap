import React from "react";
import "./Categories.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../stores/categories";
import { useHistory } from "react-router-dom";
import { FcDocument } from "react-icons/fc";
import { filterDocs } from "../../stores/docs";
import {
  AiOutlineLine,
  AiOutlineArrowRight as Right,
  AiOutlineArrowUp as Up,
} from "react-icons/ai";
import { useState } from "react";

const Categories = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const [click, setClick] = useState(false);
  return (
    <div className="container transparent">
      <div className="wrapper">
        <div className="categories_container">
          <small>
            <AiOutlineLine className="line" />
            Sənədlər
          </small>
          <div className="categories_row">
            <h2 className="categories_headline">
              Kateqoriyaya görə sənədləri seçin
            </h2>
            <button
              className="btn outline"
              onClick={() => {
                setClick(!click);
              }}
            >
              Bütün sənədlər
              {click ? (
                <Up className="btn-arrow" />
              ) : (
                <Right className="btn-arrow" />
              )}
            </button>
          </div>
          <div className="categories">
            {categories.map((category) => (
              <div key={category.id} className="category">
                <FcDocument className="category_icon" />
                <h3 className="category_heading">{category.title}</h3>
                <p className="category_body">{category.body}</p>
                <div
                  className="category_btn_wrap"
                  onClick={() => {
                    history.push("/all-docs");
                  }}
                >
                  <Right className="category_btn" />
                </div>
              </div>
            ))}
          </div>
          <button className="btn mobile" onClick={() => setClick(!click)}>
            Daha çox məlumat
            {click ? (
              <Up className="btn-arrow" />
            ) : (
              <Right className="btn-arrow" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
