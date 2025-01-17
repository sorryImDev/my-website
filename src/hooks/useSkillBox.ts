import { useState, useEffect } from "react";

type Skill = {
  label: string;
  icon: string;
};

type SkillCategory = "language" | "framework" | "tools";

type UseSkillBoxReturn = {
  skills: Skill[];
  isLoading: boolean;
  error: string | null;
};

const useSkillBox = (title: string, subtitle: any): UseSkillBoxReturn => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await import("../data/skills.json");
        const matchedData = data.find(
          (item: { title: string }) => item.title === title
        );
        if (matchedData && matchedData[subtitle]) {
          setSkills(matchedData[subtitle]);
        } else {
          setError(
            `No skills found for the title "${title}" and category "${subtitle}".`
          );
        }
      } catch (err) {
        setError("Failed to load skills data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [title]);

  return { skills, isLoading, error };
};

export default useSkillBox;
