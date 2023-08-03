//React
import { useRef, useState } from "react";

//Next

//Components
import {
  CanvasComponent,
  MetaData,
} from "@/components/shared/shared.components";

import {
  PAGE_METADATA,
  OPEN_GRAPH,
} from "@/react-utils/variables/shared/index-shared.variables";

//Variables
import {
  frontEndSkills,
  backEndSkills,
} from "@/react-utils/variables/common/skills/skill.variables";

import {
  educationTimeline,
  experienceTimeline,
} from "@/react-utils/variables/common/skills/education-experience.variables";
import {
  SkillsCard,
  Timeline,
} from "@/components/common/skills/skills-page.components";

export default function Skills(): JSX.Element {
  const { skills } = PAGE_METADATA;
  const skillsPageSectionRef = useRef<HTMLElement>(null);

  const [isRotated, setIsRotated] = useState<boolean>(false);

  const rotateRef = useRef<boolean>(true);
  rotateRef.current = true;

  return (
    <>
      <MetaData
        title={skills.title}
        description={skills.description}
        pageUri={skills.pageUri}
        needsIndexation={skills.needsIndexation}
        needsRobotCrawlers={skills.needsRobotCrawlers}
        openGraph={OPEN_GRAPH}
      />
      <section className="skills-page" ref={skillsPageSectionRef}>
        <CanvasComponent parentElement={skillsPageSectionRef} />
        <h1 className="skills-page__title">Skills</h1>
        <h2 className="skills-page__subtitle">My technical level</h2>
        <div className="skills-page__skills-container">
          {/* BEGIN           */}

          <SkillsCard
            listClass="skills-page__skills-front-end"
            skillsArray={frontEndSkills}
            title="Front-end skills"
          />

          <SkillsCard
            listClass="skills-page__skills-back-end"
            skillsArray={backEndSkills}
            title="Back-end skills"
          />

          {/* END           */}
        </div>
        <h2 className="skills-page__qualifications-title">Qualifications</h2>
        <h3 className="skills-page__qualifications-subtitle">
          My path of growth and development
        </h3>
        <div className="skills-page__qualifications-buttons">
          <button
            type="button"
            className={`skills-page__qualifications-button ${
              !isRotated && "skills-page__qualifications-button--active"
            }`}
            onClick={() => {
              setIsRotated(false);
              rotateRef.current = false;
            }}
          >
            Experience
          </button>
          <button
            type="button"
            className={`skills-page__qualifications-button ${
              isRotated && "skills-page__qualifications-button--active"
            }`}
            onClick={() => {
              setIsRotated(true);
              rotateRef.current = true;
            }}
          >
            Education
          </button>
        </div>
        <div className="skills-page__qualifications-container">
          <div className={`skills-page__qualifications-content`}>
            <div
              className={`skills-page__qualifications-education ${
                isRotated && "skills-page__qualifications-education--active"
              }`}
            >
              <Timeline arrayOfTimeLines={educationTimeline} />
            </div>
            <div
              className={`skills-page__qualifications-experience  ${
                !isRotated && "skills-page__qualifications-experience--active"
              }`}
            >
              <Timeline arrayOfTimeLines={experienceTimeline} reverse />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
