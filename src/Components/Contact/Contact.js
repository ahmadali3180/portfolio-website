import React, { useRef } from "react";
import "./Contact.css";
import Typed from "react-typed";
import { Send } from "@mui/icons-material";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n0zcelc",
        "template_bn2szcj",
        form.current,
        "cmb8dUqvncj9y3vlM"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="width-100 ContactContainer">
      <div className="res-1440-in ContactParent">
        <div className="ParentHeadingContainer">
          <h1 className="ParentHeading">Contact</h1>
          <p className="ParentSubHeading">Lets Get In Touch</p>
          <div className="ParentDivisionLineContainer">
            <div className="ParentDivisionLineSide"></div>
            <div className="ParentDivisionLineCenter"></div>
            <div className="ParentDivisionLineSide"></div>
          </div>
        </div>

        <div className="ContactFormContainer">
          <div className="CFOtherView">
            <h1>
              <Typed
                strings={["Get In Touch", "Send a Message"]}
                loop={true}
                typeSpeed={45}
                backSpeed={30}
              />
            </h1>
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
          </div>
          <div className="ContactFormParent">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="ContactFormMainForm"
            >
              <div className="CFInputContainer">
                <p className="CFInputPH">Full Name</p>
                <input type="text" className="CFInputField" name="user_name" />
              </div>
              <div className="CFInputContainer">
                <p className="CFInputPH">Email</p>
                <input
                  type="email"
                  className="CFInputField"
                  name="user_email"
                />
              </div>
              <div className="CFInputContainer">
                <p className="CFInputPH">Message</p>
                <textarea rows={6} className="CFTextArea" name="message" />
              </div>
              <div className="CFSendButtonContainer">
                <button
                  type="submit"
                  value="Send"
                  className="btn PrimaryBtn CFSendButton"
                >
                  {""} Send <Send className="CfSendIcon" />
                  {""}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
