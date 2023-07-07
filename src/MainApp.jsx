import React from "react";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Resume from "./Components/Resume/Resume";

function MainApp() {
  return (
    <div className="width-100">
      <Home />
      <AboutMe />
      <Resume />
    </div>
  );
}

export default MainApp;
