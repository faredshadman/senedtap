import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { getDocs, updateDocs } from "../../stores/docs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Fav = () => {
  const dispatch = useDispatch();
  const { docs } = useSelector((state) => state.filterdocs);
  useEffect(() => {
    dispatch(getDocs());
  }, [dispatch]);
  const filteredDocs = useMemo(() => {
    return docs.filter((doc) => doc.fav === true);
  }, [docs]);
  return (
    <div className="wrapper">
      <div className="docs_container fav">
        <AnimatePresence>
          {docs &&
            docs.length &&
            filteredDocs.map((doc) => (
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
      </div>
    </div>
  );
};

export default Fav;
