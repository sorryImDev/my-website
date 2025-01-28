import React from "react";
import "./skill-box-content.css";
import { ReactComponent as TypeScript } from "../../assets/logo/Typescript.svg";
import { ReactComponent as SpringBoot } from "../../assets/logo/Spring Boot.svg";
import { ReactComponent as Redis } from "../../assets/logo/Redis.svg";
import { ReactComponent as ReactNative } from "../../assets/logo/React Native.svg";
import { ReactComponent as Python } from "../../assets/logo/Python.svg";
import { ReactComponent as NodeJS } from "../../assets/logo/NodeJS.svg";
import { ReactComponent as Java } from "../../assets/logo/Java.svg";
import { ReactComponent as ExpressJS } from "../../assets/logo/Express JS.svg";
import { ReactComponent as Django } from "../../assets/logo/Django.svg";
import { ReactComponent as Kotlin } from "../../assets/logo/Kotlin.svg";
import { ReactComponent as AndroidStudio } from "../../assets/logo/Android Studio.svg";
import { ReactComponent as CSS } from "../../assets/logo/CSS.svg";
import { ReactComponent as liquibase } from "../../assets/logo/liquibase.svg";
import { ReactComponent as kafka } from "../../assets/logo/kafka.svg";
import { ReactComponent as MSSQL } from "../../assets/logo/MSSQL.svg";
import { ReactComponent as NestJs } from "../../assets/logo/NestJs.svg";
import { ReactComponent as K8 } from "../../assets/logo/K8.svg";
import { ReactComponent as Docker } from "../../assets/logo/Docker.svg";
import { ReactComponent as Gitlab } from "../../assets/logo/Gitlab.svg";
import { ReactComponent as fortify } from "../../assets/logo/fortify.svg";
import { ReactComponent as Aws } from "../../assets/logo/Aws.svg";

import { Skill } from "../../types/Skills";
import { Avatar } from "@mui/material";

type SkillBoxContentComponentProps = {
  subtitle: string;
  skills: Skill[];
};

const ICON_MAP: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  TypeScript,
  SpringBoot,
  Redis,
  ReactNative,
  Python,
  NodeJS,
  Java,
  ExpressJS,
  Django,
  Kotlin,
  AndroidStudio,
  CSS,
  liquibase,
  kafka,
  MSSQL,
  NestJs,
  K8,
  Docker,
  Gitlab,
  fortify,
  Aws,
};

const SkillBoxContent: React.FC<SkillBoxContentComponentProps> = ({
  subtitle,
  skills,
}) => {
  return (
    <div className="skillbox-content-row">
      <div className="row-title">{subtitle}</div>
      <div className="skillbox-content">
        {skills.map((skill, index) => {
          const IconComponent = ICON_MAP[skill.icon];
          return (
            <div className="content-set" key={index}>
              {IconComponent ? (
                <IconComponent />
              ) : (
                <Avatar
                  sx={{ bgcolor: "var(--app-blue)" }}
                  style={{ maxHeight: "32px", maxWidth: "32px" }}
                >
                  {skill.label.charAt(0)}
                </Avatar>
              )}
              <text>{skill.label}</text>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillBoxContent;
