import React, { useEffect, useRef, useState } from "react";
import "./skills-section.css";
import { Chip } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { SkillBox } from "../../components";

const SkillsSection: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const skillsSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      },
      {
        threshold: 0,
      }
    );

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    return () => {
      if (skillsSectionRef.current) {
        observer.unobserve(skillsSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="skills-section" ref={skillsSectionRef}>
      <div className={`left-col ${isSticky ? "sticky" : ""}`}>
        <Chip
          label={"Competencies"}
          icon={<CircleIcon style={{ fill: "orange", fontSize: "8px" }} />}
          className="chip"
          sx={{
            borderRadius: "8px",
            backgroundColor: "#001633",
            stroke: "#00224D",
            fontFamily: "var(--manrope-font)",
            color: "var(--app-white)",
            padding: "6px 16px",
            fontSize: "14px",
          }}
        />
        <div className="section-title">
          My Skill, Language <br />
          and Framework
        </div>
      </div>
      <div className="right-col">
        <SkillBox
          title={"Backend"}
          subTitleTop={"Language"}
          subTitleBtm={"Framework and Tools"}
        />
        <SkillBox
          title={"DevSecOps and DevTools"}
          subTitleTop={"Tools"}
          subTitleBtm={"Platform"}
        />
        <SkillBox
          title={"Frontend"}
          subTitleTop={"Language"}
          subTitleBtm={"Framework"}
        />
      </div>
    </div>
  );
};

export default SkillsSection;
