import { log } from "@/react-utils/functions/helper-functions";
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
      <div className="skills-page__card-item-text">
        <h4 className="skills-page__card-item-skill">{skill}</h4>
        <p className="skills-page__card-item-level">{level}</p>
      </div>
    </div>
  );
}
