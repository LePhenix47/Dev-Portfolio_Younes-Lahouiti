//React
import React from "react";

//Utils
import { SkillCardList } from "@components/common/skills/skills-page.components";
import { skill } from "@utilities/types/skills/skill.types";
type SkillsCardProps = {
  listClass: "skills-page__skills-front-end" | "skills-page__skills-back-end";
  title: string;
  skillsArray: skill;
};

/**
 * Represents a card displaying a list of skills used in the SkillsPage component.
 *
 * @param {("skills-page__skills-front-end" | "skills-page__skills-back-end")} listClass - The class name for the skills list. Either "skills-page__skills-front-end" or "skills-page__skills-back-end".
 * @param {string} title - The title of the skills card.
 * @param {skill[]} skillsArray - An array of skill objects containing the skill name and proficiency level.
 * @returns {JSX.Element} A JSX element representing the SkillsCard component.
 *
 * @example
@component
 * // Example usage:
 * <SkillsCard
 *   listClass="skills-page__skills-front-end"
 *   title="Front-end Skills"
 *   skillsArray={[
 *     { skill: "HTML", level: "Intermediate" },
 *     { skill: "CSS", level: "Advanced" },
 *     { skill: "JavaScript", level: "Expert" },
 *   ]}
 * />
 */
export default function SkillsCard({
  listClass,
  title,
  skillsArray,
}: SkillsCardProps): JSX.Element {
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
