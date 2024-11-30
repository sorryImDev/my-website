import React from "react";
import Button from "@mui/material/Button";
import { Avatar, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./landing-header.css";
import CustomButton from "../customButton";
import CallIcon from "@mui/icons-material/Call";
import LionelLogo from "../LionelLogo/LionelLogo";

const Header: React.FC = ({}) => {
  return (
    <div className="header-div">
      <div className=".header-content">
        <LionelLogo />
      </div>
      <div className=".header-content">
        {/* <CustomButton
          text={"Let's connect"}
          icon={<CallIcon />}
          onClick={() => console.log("click")}
        /> */}
      </div>
    </div>
  );
};

export default Header;
