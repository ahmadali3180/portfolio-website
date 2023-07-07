import React from "react";
import Profile from "./Profile";
import Footer from "./Footer/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="HomeContainer">
      <Profile />
      <Footer />
    </div>
  );
}

export default Home;
