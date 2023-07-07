import React from "react";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import "./Profile.css";

function Profile() {
  return (
    <div className="width-100 ProfileContainer">
      <div className="res-1440-in ProfileParent">
        <div className="ProfileDetails">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/ahmadali3180/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/ig.ahmadali/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://twitter.com/twt_ahmadali">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="ProfileDetailsName">
            <span className="PrimaryText">
              {""}
              Hello, I'm <span className="HighlightedText">M. Ahmad Ali</span>
            </span>
          </div>
          <div className="ProfileDetailsRole">
            <span className="PrimaryText">
              {""}
              <h1>
                <Typed
                  strings={[
                    "Enthusiastic Dev 🤩",
                    "Native iOS Dev 📱",
                    "Full Stack Developer 💻",
                    "MERN Stack Dev",
                    "Cross Platform Dev",
                    "React/React Native Dev 🌐",
                  ]}
                  loop={true}
                  typeSpeed={45}
                  backSpeed={30}
                />
              </h1>
              <span className="ProfileRoleTagline">
                Knack of building applications with front and back end
                operations.
              </span>
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
        <div className="ProfilePicture">
          <div className="ProfilePictureBackground"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
