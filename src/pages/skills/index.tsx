//React
import { useRef, useState } from "react";

//Next
import Head from "next/head";

//Components
import { CanvasComponent } from "@/components/shared/shared.components";

//Variables
import {
  frontEndSkills,
  backEndSkills,
} from "@/react-utils/variables/skill.variables";

import {
  educationTimeline,
  experienceTimeline,
} from "@/react-utils/variables/education-experience.variables";
import {
  SkillsCard,
  Timeline,
} from "@/components/common/skills/skills-page.components";

export default function Skills(): JSX.Element {
  const skillsPageSectionRef = useRef<HTMLElement>(null);

  const [isRotated, setIsRotated] = useState<boolean>(false);

  const rotateRef = useRef<boolean>(true);
  rotateRef.current = true;

  return (
    <>
      <Head>
        {/*
         <!-- Meta tags-->
         */}
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="
          Take a closer look at my technical skills as a web developer. From front-end to back-end technologies, I'm proficient in a range of tools and languages that can help bring your projects to life"
        />
        {/* Open Graph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Skills page" />
        <meta
          property="og:description"
          content="
          Take a closer look at my technical skills as a web developer. From front-end to back-end technologies, I'm proficient in a range of tools and languages that can help bring your projects to life"
        />
        <meta property="og:image" content="/jpg/profile-pic.jpg" />
        <meta property="og:image:width" content="130" />
        <meta property="og:image:height" content="170" />
        <meta
          property="og:url"
          content="https://younes-portfolio-dev.vercel.app/skills"
        />
        {/*
         <!--Title--> 
         */}
        <title>Skills page</title>
      </Head>
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
