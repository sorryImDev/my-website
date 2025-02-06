import React from "react";
import "./skill-box.css";
import SkillBoxContent from "../skill-box-content";
import useSkillBox from "../../hooks/useSkillBox";

type SkillBoxComponentProps = {
  title: string;
  subTitleTop: string;
  subTitleBtm?: string;
  contact?: boolean;
};

const SkillBox: React.FC<SkillBoxComponentProps> = ({
  title,
  subTitleTop,
  subTitleBtm,
  contact = false,
}) => {
  const { topSkills, btmSkills } = useSkillBox(title);

  return (
    <div className="skillbox">
      <div className="title-row">{title}</div>
      <div className="content-row">
        {contact ? (
          <SkillBoxContent subtitle={'Email'} skills={topSkills} contact/>
        ) : (
          <SkillBoxContent subtitle={subTitleTop} skills={topSkills} />
        )}
      </div>
      <div className="content-row">
        <SkillBoxContent subtitle={subTitleBtm} skills={btmSkills} />
      </div>
    </div>
  );
};

export default SkillBox;
