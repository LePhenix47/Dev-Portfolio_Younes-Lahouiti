import Icons from "@components/shared/icons/Icons";
import React from "react";

export default function SkillCardList({
  skill,
  level,
}: {
  skill: string;
  level: string;
}): JSX.Element {
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
