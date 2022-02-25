import React from "react";
import "./AllDocs.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Docs from "../../components/Docs/Docs";
const AllDocs = () => {
  return (
    <>
      <Navbar background="container transparent sticky" />
      <div className="sidedocs-container">
        <Sidebar />
        <Docs />
      </div>
      <Footer />
    </>
  );
};

export default AllDocs;
