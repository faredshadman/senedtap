import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDocs, updateDocs } from "../../stores/docs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Docs.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const Docs = () => {
  const dispatch = useDispatch();
  const { filterDocs } = useSelector((state) => state.filterdocs);
  useEffect(() => {
    dispatch(getDocs());
  }, [dispatch]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <h1 style={{ marginBottom: "1rem" }}>Sənədlər</h1>
        <div className="breadcrumb" style={{ marginBottom: "1rem" }}>
          <Link to="/">Ana Sehife</Link>
          <span> &gt;&gt; </span>
          <Link to="/all-docs">Senedler</Link>
        </div>
      </div>

      <motion.div layout className="docs_container">
        <AnimatePresence>
          {filterDocs &&
            filterDocs.map((doc) => (
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                layout
                className="docs_item"
                key={doc.id}
              >
                <h4 className="docs_item_title">{doc.title}</h4>
                <p className="docs_item_body">{doc.body}</p>
                <div className="docs_item_price_fav">
                  <span>
                    <span className="docs_item_price">
                      {doc.discount ? <del>{doc.price} ₼</del> : ""}
                    </span>
                    <span className="docs_item_price_discount">
                      {doc.discount ? doc.price * doc.discount : doc.price}
                      <span> {doc.price !== "Free" ? "₼" : ""}</span>
                    </span>
                  </span>
                  <div
                    className="fav_group"
                    onClick={() => {
                      dispatch(updateDocs(doc));
                    }}
                  >
                    {doc.fav ? (
                      <AiFillHeart className="fill_heart" />
                    ) : (
                      <AiOutlineHeart className="outline_heart" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Docs;
