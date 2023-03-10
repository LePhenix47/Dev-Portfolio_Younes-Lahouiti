//Next
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

//Utils
import { aboutCardsValues } from "@/react-utils/variables/about-cards.variables";
import AboutCard from "@/components/AboutCard/AboutCard";
/**
 * About me page: `/about`
 */
export default function About(): JSX.Element {
  /**
   * Year of my birth
   */
  let dateOfBirth = new Date("06/13/2002").getTime();

  /**
   * Current year
   */
  let currentDate = new Date().getTime();

  /**
   * Milliseconds per year : 1 second * 1 min * 1 hour * 1 day * 1 year (including leap years)
   */
  const MILLISECONDS_IN_A_YEAR = 1000 * 60 * 60 * 24 * 365.25;

  /**
   * My actual age
   */
  const myAgeInYears = Math.floor(
    (currentDate - dateOfBirth) / MILLISECONDS_IN_A_YEAR
  );

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
      <section className="about-page">
        <h1 className="about-page__title">About me</h1>
        <h2 className="about-page__subtitle">My introduction</h2>
        <section className="about-page__introduction-content">
          <section className="about-page__image-container">
            <Image
              src="/profile-pic.jpg"
              alt="Profile picture"
              height={170}
              width={130}
              className="about-page__image"
            />
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
                I&apos;m a {myAgeInYears} years old Italian full-stack developer
                with expertise in developing web applications, including the
                integration of UI/UX interface. While my primary focus is on
                developing the functionality of the applications, I am also
                proficient in integrating Figma mockups.
              </p>
              <Link
                href="/Younes-Lahouiti_Resume-CV.pdf"
                className="link-button about-page__resume-button"
                target="_blank"
                download
              >
                Scoop up my resume!
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Link>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

/*

 I started programming with Scratch at 13 and later explored Python in high school for math problems.
 Although I struggled with C++, C, Java, and PHP in college and eventually dropped out, I didn't give up.

 Instead, I took a self-taught path to become a web developer.
 Through two internships at OpenClassrooms, I earned diplomas in Fullstack and Front-End web development.

 */
