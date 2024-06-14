//Next

import Link from "next/link";

import minifiedImage from "@public/jpg/about/profile-pic-small-2.jpg";

//Utils
import { aboutCardsValues } from "@utilities/variables/common/about/about-cards.variables";

//React
import { useRef } from "react";

//Components
import {
  CanvasComponent,
  LazyImageLoader,
  MetaData,
} from "@components/shared/shared.components";

import {
  PAGE_METADATA,
  OPEN_GRAPH,
} from "@utilities/variables/shared/index-shared.variables";

//Variables
import { diplomas } from "@utilities/variables/common/about/diplomas.variables";
import { JPG_URLS, PDF_URLS } from "@assets/index.assets";
import {
  AboutCard,
  DiplomaCard,
  NoiseFilter,
} from "@components/common/about/about-page.components";
import Icons from "@components/shared/icons/Icons";
import { getAgeFromDateOfBirth } from "@utilities/helpers/numbers.helpers";

/**
 * About Me page component: `/about`
 *
 * This component represents the About Me page of the website. It includes information about the developer's introduction, skills, and earned diplomas.
 *
 * @returns {JSX.Element} The JSX element representing the About Me page.
 */
export default function About(): JSX.Element {
  const { about } = PAGE_METADATA;
  const aboutPageSectionRef = useRef<HTMLElement>(null);
  /**
   * My date of birth: June 13th 2002
   *
   * @type {string}
   */
  const dateOfBirth: string = "06/13/2002";

  /**
   * My actual age
   *
   * @type {number}
   */
  const myAgeInYears: number = getAgeFromDateOfBirth(dateOfBirth);

  /**
   * Id of the image used to apply the SVG filter
   *
   * @type {string}
   */
  const imageId: string = "image";

  return (
    <>
      <MetaData
        title={about.title}
        description={about.description}
        pageUri={about.pageUri}
        needsIndexation={about.needsIndexation}
        allowRobotCrawlers={about.allowRobotCrawlers}
        openGraph={OPEN_GRAPH}
      />
      <section className="about-page page-section" ref={aboutPageSectionRef}>
        <CanvasComponent parentElement={aboutPageSectionRef} />
        <h1 className="about-page__title">About me</h1>
        <h2 className="about-page__subtitle">My introduction</h2>
        <section className="about-page__introduction-content">
          <LazyImageLoader
            src={JPG_URLS.PROFILE_PIC_2}
            alt="Profile picture"
            height={1_920}
            width={1_080}
            imageClassName="about-page__image"
            containerClassName="about-page__image-container"
            id={imageId}
            backgroundImageUrl={minifiedImage.src}
          />

          <NoiseFilter imageId={imageId} />
          {/* Filter SVG to make the noise effect on my profile picture         */}
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
