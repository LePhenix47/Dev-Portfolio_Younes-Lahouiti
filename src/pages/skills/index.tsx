//React
import { useRef, useState } from "react";

//Next

//Components
import {
  Button,
  CanvasComponent,
  MetaData,
} from "@components/shared/shared.components";

import {
  PAGE_METADATA,
  OPEN_GRAPH,
} from "@utilities/variables/shared/index-shared.variables";

//Variables
import {
  frontEndSkills,
  backEndSkills,
} from "@utilities/variables/common/skills/skill.variables";

import {
  educationTimeline,
  experienceTimeline,
} from "@utilities/variables/common/skills/education-experience.variables";
import {
  SkillsCard,
  Timeline,
} from "@components/common/skills/skills-page.components";

/**
 * Skills page component: `/skills`
 *
 * This component represents the Skills page of the website. It showcases the developer's technical skills, including front-end and back-end skills. It also provides a timeline of the developer's education and experience.
 *
 * @returns {JSX.Element} The JSX element representing the Skills page.
 */
export default function Skills(): JSX.Element {
  const { skills } = PAGE_METADATA;
  const skillsPageSectionRef = useRef<HTMLElement>(null);

  const [isRotated, setIsRotated] = useState<boolean>(false);

  return (
    <>
      <MetaData
        title={skills.title}
        description={skills.description}
        pageUri={skills.pageUri}
        needsIndexation={skills.needsIndexation}
        allowRobotCrawlers={skills.allowRobotCrawlers}
        openGraph={OPEN_GRAPH}
      />
      <section className="skills-page page-section" ref={skillsPageSectionRef}>
        <CanvasComponent parentElement={skillsPageSectionRef} />
        <h1 className="skills-page__title">Skills</h1>
        <h2 className="skills-page__subtitle">My technical level</h2>
        <div className="skills-page__skills-container">
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
        </div>
        <h2 className="skills-page__qualifications-title">Qualifications</h2>
        <h3 className="skills-page__qualifications-subtitle">
          My path of growth and development
        </h3>
        <div className="skills-page__qualifications-buttons">
          <Button
            arrayOfClasses={`skills-page__qualifications-button ${
              !isRotated && "skills-page__qualifications-button--active"
            }`.split(" ")}
            type="button"
            onClick={() => {
              setIsRotated(false);
            }}
          >
            Experience
          </Button>

          <Button
            arrayOfClasses={`skills-page__qualifications-button ${
              isRotated && "skills-page__qualifications-button--active"
            }`.split(" ")}
            type="button"
            onClick={() => {
              setIsRotated(true);
            }}
          >
            Education
          </Button>
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
