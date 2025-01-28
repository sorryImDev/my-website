import React from "react";
import Button from "@mui/material/Button";
import { Avatar, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./landing-header.css";
import { CustomButton, AvatarLinkGroup } from "../../components";
import CallIcon from "@mui/icons-material/Call";
import LionelLogo from "../LionelLogo/LionelLogo";

const Header: React.FC = ({}) => {
  return (
    <div className="header-div">
      <div className=".header-content">
        <LionelLogo />
      </div>
      <div className=".header-content"></div>
    </div>
  );
};

export default Header;
