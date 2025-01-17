import React from "react";
import "./skill-box.css";
import SkillBoxContent from "../skill-box-content";

type SkillBoxComponentProps = {
  title: string;
  subTitleTop: string;
  subTitleBtm: string;
};

const SkillBox: React.FC<SkillBoxComponentProps> = ({
  title,
  subTitleTop,
  subTitleBtm,
}) => {
  const [topRowContent, setTopRowContent] = useSkillBox();
  return (
    <div className="skillbox">
      <div className="title-row">{title}</div>
      <div className="content-row">
        <SkillBoxContent subtitle={subTitleTop} />
      </div>
    </div>
  );
};

export default SkillBox;
