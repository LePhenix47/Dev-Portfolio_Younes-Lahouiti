//Next
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

//Utils
import { aboutCardsValues } from "@/react-utils/variables/about-cards.variables";

//React
import { useRef } from "react";

//Components
import { CanvasComponent } from "@/components/shared/shared.components";

//Variables
import { diplomas } from "@/react-utils/variables/diplomas.variables";
import { JPG_URLS, PDF_URLS } from "@/react-utils/constants/index.constants";
import {
  AboutCard,
  DiplomaCard,
  NoiseFilter,
} from "@/components/common/about/about-page.components";
import { ResumeIcon } from "@/components/shared/icons/icons-index.components";

/**
 * About me page: `/about`
 */
export default function About(): JSX.Element {
  const aboutPageSectionRef = useRef<HTMLElement>(null);
  /**
   * My date of birth: June 13th 2002
   */
  const dateOfBirth: number = new Date("06/13/2002").getTime();

  /**
   * Current year
   */
  const currentDate: number = new Date().getTime();

  /**
   * Milliseconds per year : `1s in ms` × `1min in s` × `1hr in mins` × `1 day in hrs` × `1 year in days`
  (including leap years)
   */
  const MILLISECONDS_IN_A_YEAR: number = 1000 * 60 * 60 * 24 * 365.25;

  /**
   * My actual age
   */
  const myAgeInYears: number = Math.floor(
    (currentDate - dateOfBirth) / MILLISECONDS_IN_A_YEAR
  );

  const imageId: string = "image";

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
          Get to know me better! I'm Younes LAHOUITI, a passionate web developer with 1 year of experience in JavaScript. In this page, I share my story, skills, and interests. Learn about my professional journey and discover how I can help you build engaging web experiences."
        />
        {/* Open Graph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About page" />
        <meta
          property="og:description"
          content="
          Get to know me better! I'm Younes LAHOUITI, a passionate web developer with 1 year of experience in JavaScript. In this page, I share my story, skills, and interests. Learn about my professional journey and discover how I can help you build engaging web experiences."
        />
        <meta property="og:image" content="/profile-pic.jpg" />
        <meta property="og:image:width" content="130" />
        <meta property="og:image:height" content="170" />
        <meta
          property="og:url"
          content="https://younes-portfolio-dev.vercel.app/about"
        />
        {/*
         <!--Title--> 
         */}
        <title>About page</title>
      </Head>
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
                I&apos;m a{" "}
                <strong>
                  <span itemProp="age">{myAgeInYears}</span> years old Italian
                  full-stack developer
                </strong>{" "}
                with expertise in <strong>developing web applications</strong>,{" "}
                <em>including the integration of UI/UX interfaces</em>. While my
                primary focus is on{" "}
                <em>developing the functionality of the applications</em>, I am
                also <em>proficient in integrating Figma mockups</em>.
              </p>

              <Link
                href={PDF_URLS.resume}
                className="link-button about-page__resume-button"
                target="_blank"
                download
              >
                Scoop up my resume!
                <ResumeIcon width={24} height={24} fill={"currentColor"} />
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
