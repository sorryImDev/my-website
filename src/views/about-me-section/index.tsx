import React from "react";
import "./about-me.css";
import { AvatarLinkGroup, Card, CustomButton } from "../../components";
import Ellipse from "../../assets/shapes/Ellipse_10.svg";
import Vector1 from "../../assets/shapes/Vector_1.svg";
import Vector2 from "../../assets/shapes/Vector.svg";

interface aboutMeSectionProps {
  customerSatisfaction: number;
  yearsOfExp: number;
  successProjects: number;
}

const AboutMeSection: React.FC<aboutMeSectionProps> = ({
  customerSatisfaction,
  yearsOfExp,
  successProjects,
}) => {
  return (
    <div className="about-me-section">
      <div className="top-row">
        <div className="section-title">
          About Me <br />
          Know My Journey
        </div>
        <div className="write-up">
          I’m a Full Stack Developer passionate about creating scalable
          applications. Skilled in <br />
          front-end and back-end, I deliver innovative solutions blending
          creativity and <br />
          technology. Let’s collaborate to bring your vision to life!
        </div>
      </div>
      <div className="bottom-row">
        <Card
          value={2}
          unit={"Years"}
          title={"of Experience"}
          backgroundUrl={Ellipse}
        />
        <Card
          value={2}
          unit={"Projects"}
          title={"successfully done"}
          backgroundUrl={Vector1}
        />
        <Card
          value={2}
          unit={"Professional certificatio"}
          title={"Obtained"}
          backgroundUrl={Vector2}
        />
      </div>
    </div>
  );
};

export default AboutMeSection;
