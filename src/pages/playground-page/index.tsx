import React from "react";
import CallIcon from "@mui/icons-material/Call";
import LionelLogo from "../../components/LionelLogo/LionelLogo";
import LionelAvatar from "../../components/avatar";
import { CustomButton, AvatarLinkGroup, Header } from "../../components";

const PlaygroundPage: React.FC = () => {
  return (
    <div>
      <Header />
      <CustomButton
        text={"Book A Call"}
        icon={<CallIcon />}
        onClick={() => console.log("click")}
        className=""
      />
      <LionelLogo />
      <AvatarLinkGroup />
    </div>
  );
};

export default PlaygroundPage;
