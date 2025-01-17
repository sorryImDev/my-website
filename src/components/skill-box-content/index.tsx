import React from "react";
import "./skill-box-content.css";
import { ReactComponent as TypeScript } from "../../assets/logo/Typescript.svg";

type SkillBoxContentComponentProps = {
  subtitle: string;
};

const SkillBoxContent: React.FC<SkillBoxContentComponentProps> = ({
  subtitle,
}) => {
  return (
    <div className="skillbox-content-row">
      <div className="row-title">{subtitle}</div>
      <div className="skillbox-content">
        <div className="content-set">
          <TypeScript />
          <text>Typescript</text>
        </div>
      </div>
    </div>
  );
};

export default SkillBoxContent;
