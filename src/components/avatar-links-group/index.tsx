import React from "react";
import "./avatar-link-group.css";
import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LionelAvatar from "../avatar";
import { ReactComponent as Elipse } from "../../assets/shapes/Frame 1000003807.svg";

const AvatarLinkGroup: React.FC = ({}) => {
  return (
    <div className="avatar-group">
      <div className="left-column">
        <Elipse />
        <LionelAvatar />
      </div>
      <div className="right-column">
        <div className="big-name">Lionel</div>
        <div className="job-title">Software Engineer</div>
        <div className="link-group">
          <a href="https://github.com/sorryImDev" className="link-item">
            <GitHub className="link-item" />
          </a>
          <a href="https://www.linkedin.com/in/ccklionel/">
            <LinkedIn className="link-item" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AvatarLinkGroup;
