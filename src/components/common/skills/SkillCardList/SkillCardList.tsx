import Icons from "@components/shared/icons/Icons";
import React from "react";

type SkillCardListProps = { skill: string; level: string };

/**
 * Represents a card item used in the SkillCardList component.
 *
 * @param {string} skill - The name of the skill.
 * @param {string} level - The proficiency level or description of the skill.
 * @returns {JSX.Element} A JSX element representing the SkillCardList component.
 *
 * @example
@component
 * // Example usage:
 * <SkillCardList
 *   skill="JavaScript"
 *   level="Intermediate"
 * />
 *
 * @component
 */
export default function SkillCardList({
  skill,
  level,
}: SkillCardListProps): JSX.Element {
  return (
    <div className="skills-page__card-item">
      <Icons.FlourishedCheckmark width={24} height={24} />
      <div className="skills-page__card-item-text">
        <h4 className="skills-page__card-item-skill">{skill}</h4>
        <p className="skills-page__card-item-level">{level}</p>
      </div>
    </div>
  );
}
