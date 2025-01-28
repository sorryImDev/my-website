import React from "react";
import "./intro-section.css";
import { ReactComponent as ScrollImg } from "../../assets/shapes/Group 12.svg";
import { ReactComponent as WavyHand } from "../../assets/shapes/wavy-hand.svg";
import { Chip } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { AvatarLinkGroup, CustomButton } from "../../components";

interface introSectionProps {
  available: boolean;
}

const IntroSection: React.FC<introSectionProps> = ({ available }) => {
  return (
    <div className="intro-section">
      <div className="left-box">
        <AvatarLinkGroup />
        <ScrollImg style={{ paddingTop: "67px" }} />
      </div>
      <div className="right-box">
        <Chip
          label={
            available
              ? "Open to new opportunities"
              : "Not actively looking for work"
          }
          icon={
            <CircleIcon
              style={{ fill: available ? "green" : "red", fontSize: "8px" }}
            />
          }
          className="chip"
          sx={{
            borderRadius: "8px",
            backgroundColor: "#F5F9FF",
            stroke: "#E6F0FF",
            fontFamily: "var(--manrope-font)",
            fontSize: "14px",
          }}
        />
        <div className="hello-text-grp">
          <WavyHand />
          Hi! I'm Lionel
        </div>
        <div className="big-FSDE">
          Full Stack Software
          <br></br>
          Development Engineer
        </div>
        <div className="contact-me-btn-div">
          <CustomButton
            text={"Let's connect"}
            icon={<PeopleOutlineIcon />}
            onClick={() => console.log("click")}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
