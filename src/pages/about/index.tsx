//Next

import Image from "next/image";
import Link from "next/link";

//Utils
import { aboutCardsValues } from "@utilities/variables/common/about/about-cards.variables";

//React
import { useRef } from "react";

//Components
import {
  CanvasComponent,
  MetaData,
} from "@components/shared/shared.components";

import {
  PAGE_METADATA,
  OPEN_GRAPH,
} from "@utilities/variables/shared/index-shared.variables";

//Variables
import { diplomas } from "@utilities/variables/common/about/diplomas.variables";
import { JPG_URLS, PDF_URLS } from "@assets/index.constants";
import {
  AboutCard,
  DiplomaCard,
  NoiseFilter,
} from "@components/common/about/about-page.components";
import Icons from "@components/shared/icons/Icons";
import { getAgeFromDateOfBirth } from "@utilities/helpers/numbers.helpers";

/**
 * About me page: `/about`
 */
export default function About(): JSX.Element {
  const { about } = PAGE_METADATA;
  const aboutPageSectionRef = useRef<HTMLElement>(null);
  /**
   * My date of birth: June 13th 2002
   */
  const dateOfBirth: string = "06/13/2002";

  /**
   * My actual age
   */
  const myAgeInYears: number = getAgeFromDateOfBirth(dateOfBirth);
  const imageId: string = "image";

  return (
    <>
      <MetaData
        title={about.title}
        description={about.description}
        pageUri={about.pageUri}
        needsIndexation={about.needsIndexation}
        needsRobotCrawlers={about.needsRobotCrawlers}
        openGraph={OPEN_GRAPH}
      />
      <section className="about-page" ref={aboutPageSectionRef}>
        <CanvasComponent parentElement={aboutPageSectionRef} />
        <h1 className="about-page__title">About me</h1>
        <h2 className="about-page__subtitle">My introduction</h2>
        <section className="about-page__introduction-content">
          <section className="about-page__image-container">
            <Image
              src={JPG_URLS.PROFILE_PIC_2}
              alt="Profile picture"
              height={1_920}
              width={1_080}
              className="about-page__image"
              id={imageId}
            />
            {/* Filter SVG to make the noise effect on my profile picture         */}
            <NoiseFilter imageId={imageId} />
          </section>
          <section className="about-page__text-cards-container">
            <div className="about-page__cards">
              {/* BEGIN  */}
              {aboutCardsValues.map((aboutCard, index: number) => {
                /**
                 * Values for the about card
                 */
                const { svgIcon, title, description } = aboutCard;

                return (
                  <AboutCard
                    svgIcon={svgIcon}
                    title={title}
                    description={description}
                    key={`${index}-${title}-${description}`}
                  />
                );
              })}
              {/* END */}
            </div>
            <div className="about-page__text">
              <p className="about-page__description">
                <strong>
                  I&apos;m a passionate {myAgeInYears}-year-old Italian
                  full-stack developer
                </strong>{" "}
                with a love for coding since a young age.{" "}
                <em>
                  Despite college not aligning with my coding journey, I chose
                  self-learning and discovered my true passion: web development.
                </em>{" "}
                Now, I create captivating websites, blending formal education
                with self-taught expertise.
              </p>

              <Link
                href={PDF_URLS.resume}
                className="link-button about-page__resume-button"
                target="_blank"
                download
              >
                Scoop up my resume!
                <Icons.Resume width={24} height={24} fill={"currentColor"} />
              </Link>
            </div>
          </section>
        </section>
        <section className="about-page__diplomas">
          <h2 className="about-page__diplomas-title">My earned diplomas</h2>

          <div className="about-page__diplomas-container">
            {diplomas.map((diploma, index) => {
              const { name, year, pdf } = diploma;

              return (
                <DiplomaCard
                  diplomaTitle={name}
                  obtainedYearRangeDate={year}
                  pdfLink={pdf}
                  key={`${name}-${year}-${index}`}
                />
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
}
