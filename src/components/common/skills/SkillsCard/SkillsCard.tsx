//React
import React from "react";

//Utils
import { frontEndSkills } from "@/react-utils/variables/common/skills/skill.variables";
import SkillCardList from "../SkillCardList/SkillCardList";
import { skill } from "@/react-utils/types/skills/skill.types";

export default function SkillsCard({
  listClass,
  title,
  skillsArray,
}: {
  listClass: "skills-page__skills-front-end" | "skills-page__skills-back-end";
  title: string;
  skillsArray: skill;
}): JSX.Element {
  return (
    <div className="skills-page__card card">
      <h3 className="skills-page__card-title card__title">{title}</h3>

      <ul className={listClass}>
        {skillsArray.map((skillItem, index: number) => {
          const { skill, level } = skillItem;
          return (
            <li
              className="skills-page__skill-front-end"
              key={`${index}-${skill}`}
            >
              <SkillCardList skill={skill} level={level} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
