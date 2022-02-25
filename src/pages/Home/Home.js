import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Categories from "../../components/Categories/Categories";
import Statistics from "../../components/Statistics/Statistics";
import "./Home.css";
import About from "../../components/About/About";
import OwlSection from "../../components/OwlSection/OwlSection";
import Footer from "../../components/Footer/Footer";
import Ellipse from "../../components/Ellipse/Ellipse";
const Home = () => {
  return (
    <>
      <Navbar background="container sticky" />
      <Ellipse />
      <Header />
      <Categories />
      <Statistics />
      <About />
      <OwlSection />
      <Footer />
    </>
  );
};

export default Home;
