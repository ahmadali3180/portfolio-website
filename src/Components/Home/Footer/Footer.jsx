import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="FooterContainer">
      <div className="FooterParent">
        <img
          src={require("../../../assets/fonts/shapebg.png")}
          alt="Poor Internet Connection"
        />
      </div>
    </div>
  );
}

export default Footer;
