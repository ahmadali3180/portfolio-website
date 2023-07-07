import React from "react";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Resume from "./Components/Resume/Resume";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";

function MainApp() {
  return (
    <div className="width-100">
      <Home />
      <AboutMe />
      <Resume />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default MainApp;
