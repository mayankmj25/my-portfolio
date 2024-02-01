import React from "react";
import Me from "../../assets/me.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="left">
        <div className="profile-pic">
          <img src={Me} alt="me" />
        </div>
      </div>
      <div className="right">
        <div className="container">
          <h1>Mayank Jaiswal</h1>
          <span>Frontend Developer - </span>
          <span> NIT Bhopal'23</span>
        </div>
        <div className="about-text">
          I'm Mayank, with hands-on experience at Tekion Corp and Synaptic,
          specializing in React, React Native, TypeScript, and JavaScript. My
          work focuses on creating intuitive web and mobile applications that
          enhance user experience. Off-screen, I'm a football aficionado,
          drawing parallels between the teamwork on the pitch and in tech
          projects. Keen on innovative solutions and collaborative success, I'm
          always ready to dive into new challenges.
        </div>
        <div className="roles">
          <span onClick={() => window.open("https://github.com/mayankmj25")}>
            <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
          </span>
          <span
            onClick={() =>
              window.open("https://www.linkedin.com/in/mayankjaiswal25")
            }
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
