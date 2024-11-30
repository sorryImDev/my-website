import React from "react";
import { Avatar } from "@mui/material";
import lcFace from "../../assets/lc-face.jpg"

const LionelAvatar: React.FC = ({}) => {
  return (
      <Avatar alt="Lionel Chew" src={lcFace} sx={{width: 120, height: 120}}/>
  );
};

export default LionelAvatar;
