//Next
import Head from "next/head";
import Image from "next/image";

//Components
import SkillCardList from "@/components/SkillCardList/SkillCardList";
import Timeline from "@/components/Timeline/Timeline";

//Utils
import {
  frontEndSkills,
  backEndSkills,
} from "@/react-utils/variables/skill.variables";

import {
  educationTimeline,
  experienceTimeline,
} from "@/react-utils/variables/education-experience.variables";

export default function Skills() {
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

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Skills page" />
        <meta
          property="og:description"
          content="
          Take a closer look at my technical skills as a web developer. From front-end to back-end technologies, I'm proficient in a range of tools and languages that can help bring your projects to life"
        />
        <meta property="og:image" content="/favicon.ico" />

        <meta
          property="og:url"
          content="www.younes-lahouiti-portfolio.com/skills"
        />

        {/*
         <!--Title--> 
         */}
        <title>Skills page</title>
      </Head>
      <section className="skills-page">
        <h1 className="skills-page__title">Skills</h1>
        <h2 className="skills-page__subtitle">My technical level</h2>
        <div className="skills-page__skills-container">
          <div className="skills-page__card card">
            <h3 className="skills-page__card-title card__title">
              Front-end skills
            </h3>
            <ul className="skills-page__skills-front-end">
              {frontEndSkills.map((frontEndSkill, index) => {
                const { skill, level } = frontEndSkill;
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

          <div className="skills-page__card card">
            <h3 className="skills-page__card-title card__title">
              Back-end skills
            </h3>
            <ul className="skills-page__skills-back-end">
              {backEndSkills.map((backEndSkill, index) => {
                const { skill, level } = backEndSkill;
                return (
                  <li
                    className="skills-page__skill-back-end"
                    key={`${index}-${skill}`}
                  >
                    <SkillCardList skill={skill} level={level} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <h2 className="skills-page__qualifications-title">Qualifications</h2>
        <h3 className="skills-page__qualifications-subtitle">
          My path of growth and development
        </h3>
        <div className="skills-page__qualifications-container">
          <div className={`skills-page__qualifications-content`}>
            <div className="skills-page__qualifications-education">
              <Timeline arrayOfTimeLines={educationTimeline} />
            </div>
            <div className="skills-page__qualifications-experience">
              <Timeline arrayOfTimeLines={experienceTimeline} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
