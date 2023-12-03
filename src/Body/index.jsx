/* eslint-disable react/no-unescaped-entities */
// import Button from "../Button";
// import Fade from "react-reveal/Fade";

import About from "../component/About";
import Chefs from "../component/Chefs";
import Contact from "../component/Contact";
import Events from "../component/Events";
import Footer from "../component/Footer";
import Gallery from "../component/Gallery";
import Header from "../component/Header";
import Hero from "../component/Hero";
import Menu from "../component/Menu";
import Specials from "../component/Specials";
import Testimonials from "../component/Testimonials";
import WhyUs from "../component/WhuUs";



const Body = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <main id="main">
      <About/>
      <WhyUs/>
      <Menu/>
      <Specials/>
      <Events/>
      <Testimonials/>
      <Gallery/>
      <Chefs/>
      <Contact/>
    </main>
    <Footer/>
    </>
  );
};

export default Body;