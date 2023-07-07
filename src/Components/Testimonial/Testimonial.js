import React from "react";
import "./Testimonial.css";
import Footer from "../Home/Footer/Footer";
import { Rating } from "@mui/material";

function Testimonial() {
  return (
    <div className="width-100 TestimonialContainer">
      <div className="TestimonialParent">
        <div className="ParentHeadingContainer">
          <h1 className="ParentHeading">Testimonial</h1>
          <p className="ParentSubHeading">What My Client Say About Me</p>
          <div className="ParentDivisionLineContainer">
            <div className="ParentDivisionLineSide"></div>
            <div className="ParentDivisionLineCenter"></div>
            <div className="ParentDivisionLineSide"></div>
          </div>
        </div>
        <div className="TestimonialMainCntContainer">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
        <Footer />
      </div>
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="TCContainer">
      <div className="TCParent">
        <p className="TCClientReviewText">
          It was nice hiring this guy for my E-commerce Store, He delivered more
          than I could imagine. I definitely recommend him for your project.
        </p>
        <Rating
          name="customized-color"
          value={4}
          readOnly
          size="small"
          className="TCRatingIcons"
        />
        <div className="TCClientParent">
          <div className="TCClientProfilePicCnt">
            <img
              src={require("../../assets/fonts/profilephoto.jpg")}
              alt="Connection Error"
              className="TCClientProfilePic"
            />
          </div>
          <div className="TCClientInfoView">
            <p className="ClientNameText">Khalid Bajwa</p>
            <p className="ClientJobText">CEO Bajwa Surgicals</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
