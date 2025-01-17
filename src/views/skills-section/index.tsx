import React from "react";
import "./skills-section.css";
import { Chip } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { SkillBox } from "../../components";

const SkillsSection: React.FC = () => {
  return (
    <div className="skills-section">
      <div className="left-col">
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
          title={"Frontend"}
          subTitleTop={"Language"}
          subTitleBtm={"Framework"}
        />
      </div>
    </div>
  );
};

export default SkillsSection;
