import React from "react";
import Typewriter from "typewriter-effect";
import "./into.scss";

const Into = () => {
  return (
    <div className="Into" id="intro">
      <div className="left">
        <img src="websiteSlides/react.png" loading="lazy" alt="" />
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Welcome to WebCraft IT Services</h2>
          <h4>Your ultimate solution for professional</h4>
          <h3>
            <span>
              <Typewriter
                options={{
                  strings: [
                    "Website Design",
                    "Web App Development",
                    "E-commerce Development",
                    "Digital Marketing",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>
        </div>
        <a href="#portfolio" className="arrow">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Into;
