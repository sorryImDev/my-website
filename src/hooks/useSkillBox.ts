import { useState, useEffect } from "react";
import { Skill } from "../types/Skills";
import skillsData from "../data/skills.json";

type UseSkillBoxReturn = {
  topSkills: Skill[];
  btmSkills: Skill[];
};

const useSkillBox = (title: string): UseSkillBoxReturn => {
  const [topSkills, setTopSkills] = useState<Skill[]>([]);
  const [btmSkills, setBtmSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchData = () => {
      const matchedData = skillsData.find(
        (item: { title: string }) => item.title === title
      );
      if (matchedData) {
        setTopSkills(matchedData["top"]);
        setBtmSkills(matchedData["bottom"]);
      }
    };

    fetchData();
  }, [title]);

  return { topSkills, btmSkills };
};

export default useSkillBox;
