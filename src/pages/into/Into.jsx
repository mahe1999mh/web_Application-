import React from "react";
import Typewriter from "typewriter-effect";
import "./into.scss";

const Into = () => {
  return (
    <div className="Into" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There,I'm</h2>
          <h1>Mahendra Reddy</h1>
          <h3>
            Freelance{" "}
            <span>
              <Typewriter
                options={{
                  strings: [
                    "Website Design",
                    "Website Development",
                    "E-commerce Development",
                    "Custom Web Application Development",
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
