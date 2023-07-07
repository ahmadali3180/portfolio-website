import React, { useState } from "react";
import {
  School,
  History,
  LaptopMac,
  BarChart,
  Palette,
} from "@mui/icons-material/";
import "./Resume.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Resume() {
  const [selectedButton, setSelectedButton] = useState("button1");
  const toggleSelectedButton = (button) => {
    setSelectedButton(button);
  };

  function RightPartElement() {
    return (
      <div>
        {selectedButton === "button1" && <EducationDisplay />}
        {selectedButton === "button2" && <WorkHistoryDisplay />}
        {selectedButton === "button3" && <ProgrammingSkills />}
        {selectedButton === "button4" && <ProjectsDisplay />}
        {selectedButton === "button5" && <InterestDisplay />}
      </div>
    );
  }

  return (
    <div className="width-100 ResumeContainer">
      <div className="res-1440-in ResumeParent">
        <div className="ParentHeadingContainer">
          <h1 className="ParentHeading">Resume</h1>
          <p className="ParentSubHeading">My Formal Bio Details</p>
          <div className="ParentDivisionLineContainer">
            <div className="ParentDivisionLineSide"></div>
            <div className="ParentDivisionLineCenter"></div>
            <div className="ParentDivisionLineSide"></div>
          </div>
        </div>
        <div className="ResumeCard">
          <div className="LeftPart">
            <div className="LPButtonMainCnt">
              <button
                className={`LPButton ${
                  selectedButton === "button1" ? "selected" : ""
                }`}
                onClick={() => toggleSelectedButton("button1")}
              >
                Education{" "}
                <span>
                  {" "}
                  <School className="LPIcon" />
                </span>
              </button>
              <button
                className={`LPButton ${
                  selectedButton === "button2" ? "selected" : ""
                }`}
                onClick={() => toggleSelectedButton("button2")}
              >
                Work History{" "}
                <span>
                  {" "}
                  <History className="LPIcon" />
                </span>
              </button>
              <button
                className={`LPButton ${
                  selectedButton === "button3" ? "selected" : ""
                }`}
                onClick={() => toggleSelectedButton("button3")}
              >
                Programming Skills{" "}
                <span>
                  {" "}
                  <LaptopMac className="LPIcon" />
                </span>
              </button>
              <button
                className={`LPButton ${
                  selectedButton === "button4" ? "selected" : ""
                }`}
                onClick={() => toggleSelectedButton("button4")}
              >
                Projects{" "}
                <span>
                  {" "}
                  <BarChart className="LPIcon" />
                </span>
              </button>
              <button
                className={`LPButton ${
                  selectedButton === "button5" ? "selected" : ""
                }`}
                onClick={() => toggleSelectedButton("button5")}
              >
                Interests{" "}
                <span>
                  {" "}
                  <Palette className="LPIcon" />
                </span>
              </button>
            </div>
          </div>
          <div className="RightPart">
            <RightPartElement />
          </div>
        </div>
      </div>
    </div>
  );
}

function EducationDisplay() {
  return (
    <div>
      <div className="RPInstituteContainer">
        <div className="RPInstituteDetailsContainer">
          <p className="RPInstituteNameText">
            Govt. Islamia College, Sialkot, Pakistan
          </p>
          <p className="RPProgramDateText">2022-2024</p>
        </div>
        <p className="RPProgramText">
          Intermediate in Computer Science.{"(Pyhsics)"}
        </p>
      </div>
      <div className="RPInstituteContainer">
        <div className="RPInstituteDetailsContainer">
          <p className="RPInstituteNameText">
            Govt. Pilot High School, Sialkot, Pakistan
          </p>
          <p className="RPProgramDateText">2013-2022</p>
        </div>
        <p className="RPProgramText">Matriculation</p>
      </div>
    </div>
  );
}
function WorkHistoryDisplay() {
  return (
    <div>
      <div className="RPInstituteContainer">
        <div className="RPInstituteDetailsContainer">
          <p className="RPInstituteNameText">RavalBit</p>
          <p className="RPProgramDateText">2020-Present</p>
        </div>
        <p className="RPProgramText">Co-Founder and CEO</p>
        <p className="RPProgramDetails">
          - Lead a team of 17 developers in a large scale app project. <br />
          - Developed full scale E-commerce Website and App. <br />
          - Developed Crypto Wallet. <br />- Developed AI chatbot for Customer
          Services. <br /> - Made RavalBit a Multi-Million Rupee Company.
        </p>
      </div>
    </div>
  );
}
function ProgrammingSkills() {
  return (
    <div className="RPSkillsMainCnt">
      <div className="RPSkillsContainer">
        <div className="RPSkillParent">
          <p className="RPSkillName">JavaScript</p>
          <div className="RPSkillProgressContainer">
            <div className="RPSkillProgressContent Skill-3"></div>
          </div>
        </div>
      </div>
      <div className="RPSkillsContainer">
        <div className="RPSkillParent">
          <p className="RPSkillName">ReactJS</p>
          <div className="RPSkillProgressContainer">
            <div className="RPSkillProgressContent Skill-3"></div>
          </div>
        </div>
      </div>
      <div className="RPSkillsContainer">
        <div className="RPSkillParent">
          <p className="RPSkillName">Swift 5</p>
          <div className="RPSkillProgressContainer">
            <div className="RPSkillProgressContent Skill-1"></div>
          </div>
        </div>
      </div>
      <div className="RPSkillsContainer">
        <div className="RPSkillParent">
          <p className="RPSkillName">ExpressJS</p>
          <div className="RPSkillProgressContainer">
            <div className="RPSkillProgressContent Skill-1"></div>
          </div>
        </div>
      </div>
      <div className="RPSkillsContainer">
        <div className="RPSkillParent">
          <p className="RPSkillName">MongoDB</p>
          <div className="RPSkillProgressContainer">
            <div className="RPSkillProgressContent Skill-2"></div>
          </div>
        </div>
      </div>
      <div className="RPSkillsContainer">
        <div className="RPSkillParent">
          <p className="RPSkillName">CSS</p>
          <div className="RPSkillProgressContainer">
            <div className="RPSkillProgressContent Skill-3"></div>
          </div>
        </div>
      </div>
      <div className="RPSkillsContainer">
        <div className="RPSkillParent">
          <p className="RPSkillName">HTML</p>
          <div className="RPSkillProgressContainer">
            <div className="RPSkillProgressContent Skill-2"></div>
          </div>
        </div>
      </div>
      <div className="RPSkillsContainer">
        <div className="RPSkillParent">
          <p className="RPSkillName">NextJS</p>
          <div className="RPSkillProgressContainer">
            <div className="RPSkillProgressContent Skill-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
function ProjectsDisplay() {
  return (
    <div>
      <div className="RPInstituteContainer">
        <div className="RPInstituteDetailsContainer">
          <p className="RPInstituteNameText">Personal Portfolio Website</p>
          <p className="RPProgramDateText">2020</p>
        </div>
        <p className="RPProgramText">Technologies Used: ReactJS, BootStrap</p>
        <p className="RPProgramDetails">
          A personal portfolio website to showcase all my details and projects
          at one place.
        </p>
      </div>
      <div className="RPInstituteContainer">
        <div className="RPInstituteDetailsContainer">
          <p className="RPInstituteNameText">Mobile E-Shop</p>
          <p className="RPProgramDateText">2021</p>
        </div>
        <p className="RPProgramText">
          Technologies Used: React Native, MongoDB, ExpressJS, NodeJS, Redux
        </p>
        <p className="RPProgramDetails">
          An E-commerce application designed to sell products online with online
          payments integrated.
        </p>
      </div>
      <div className="RPInstituteContainer">
        <div className="RPInstituteDetailsContainer">
          <p className="RPInstituteNameText">Music App</p>
          <p className="RPProgramDateText">2021</p>
        </div>
        <p className="RPProgramText">
          Technologies Used: React Native, MongoDB, ExpressJS, NodeJS, Redux
        </p>
        <p className="RPProgramDetails">
          A music player application designed to give perfect personal player
          experience with advanced features, powered with Artificial
          Intelligence.
        </p>
      </div>
    </div>
  );
}
function InterestDisplay() {
  return (
    <div>
      <div className="RPInstituteContainer">
        <div className="RPInstituteDetailsContainer">
          <p className="RPInstituteNameText">Teaching</p>
        </div>
        <p className="RPProgramDetails">
          Apart from being an enthusiast and a full time programmer, I also like
          to teach my skills to other people. I also have a training program
          where I teach Web development.
        </p>
      </div>
      <div className="RPInstituteContainer">
        <div className="RPInstituteDetailsContainer">
          <p className="RPInstituteNameText">Crypto Trading</p>
        </div>
        <p className="RPProgramDetails">
          While being a full time developer, I also do Crypto Trading. I took
          many courses and put my time into it and soon I am going to launch a
          course where I would teach fundamental and technical analysis
        </p>
      </div>
      <div className="RPInstituteContainer">
        <div className="RPInstituteDetailsContainer">
          <p className="RPInstituteNameText">Building Cars</p>
        </div>
        <p className="RPProgramDetails">
          As a full time developer it is very difficult to take out time, but
          still I love to build cars especially the older JDMs. I put all my
          effort into them for months and then enjoy them for sometime, sell
          them and get a new project car for something new.
        </p>
      </div>
    </div>
  );
}

export default Resume;
