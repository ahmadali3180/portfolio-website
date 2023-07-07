import React from "react";
import "./AboutMe.css";
import "../Home/Profile.css";
function AboutMe() {
  return (
    <div className="width-100  AboutMeContainer">
      <div className="res-1440-in AboutMeParent">
        <div className="ParentHeadingContainer">
          <h1 className="ParentHeading">About Me</h1>
          <p className="ParentSubHeading">Why Choose Me?</p>
          <div className="ParentDivisionLineContainer">
            <div className="ParentDivisionLineSide"></div>
            <div className="ParentDivisionLineCenter"></div>
            <div className="ParentDivisionLineSide"></div>
          </div>
        </div>
        <div className="AboutMeCard">
          <div className="AboutMeInfoContainer">
            <p className="AboutMeInfoText">
              Full stack Web and App Developer with background knowledge of MERN
              stacks with redux, along with with building beautiful Mobile Apps
              in Swift for iOS with utmost efficiency. Experienced with MongoDB
              and SQLite. Strong professional with experience of 2 years in
              development.
            </p>
            <div className="AboutMeInfoHighlightsDiv">
              <p className="AboutMeInfoHighlightH">
                Here are a Few Highlights:
              </p>
              <span className="AboutMeInfoSpan">
                • <p>Full Stack Web and Mobile Development</p>
              </span>
              <span className="AboutMeInfoSpan">
                • <p>Interactive Front End as per design</p>
              </span>
              <span className="AboutMeInfoSpan">
                • <p>React and React Native</p>
              </span>
              <span className="AboutMeInfoSpan">
                • <p>Native iOS in Swift</p>
              </span>
              <span className="AboutMeInfoSpan">
                • <p>Building REST API</p>
              </span>
              <span className="AboutMeInfoSpan">
                • <p>Managing Database</p>
              </span>
            </div>
            <div className="ProfileOptions">
              <button className="btn PrimaryBtn">
                {""} Hire Me {""}
              </button>
              <button className="btn HighlightedBtn">
                {""} View Resume {""}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
