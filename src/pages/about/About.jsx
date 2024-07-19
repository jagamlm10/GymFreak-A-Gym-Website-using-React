import React from "react";
import "./about.css";
import HeaderImage from "../../images/header_bg_1.jpg";
import VisionImage from "../../images/about2.jpg";
import StoryImage from "../../images/about1.jpg";
import MissionImage from "../../images/about3.jpg";
import Header from "../../components/Header";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
        viverra nibh, in malesuada orci. Aliquam in viverra metus, semper
        imperdiet justo.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. "
            </p>
            <p>
              Suspendisse auctor sapien id lectus dignissim congue. In nunc
              lorem, faucibus sit amet diam quis, faucibus rutrum libero. Nam
              mattis, nisi non volutpat ornare, mi nunc mattis leo, non pretium
              tortor elit vitae urna. Donec porttitor eget quam a tristique.
              Maecenas pharetra libero ac velit tincidunt, vel imperdiet eros
              fringilla. Sed scelerisque felis at lectus congue, ut lobortis sem
              pretium. Sed sagittis sed augue ut facilisis.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. "
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. "
            </p>
            <p>
              Suspendisse auctor sapien id lectus dignissim congue. In nunc
              lorem, faucibus sit amet diam quis, faucibus rutrum libero. Nam
              mattis, nisi non volutpat ornare, mi nunc mattis leo, non pretium
              tortor elit vitae urna. Donec porttitor eget quam a tristique.
              Maecenas pharetra libero ac velit tincidunt, vel imperdiet eros
              fringilla. Sed scelerisque felis at lectus congue, ut lobortis sem
              pretium. Sed sagittis sed augue ut facilisis.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
