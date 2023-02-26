//Next
import Head from "next/head";
import Image from "next/image";

export default function About(): JSX.Element {
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

        <meta property="og:type" content="website" />
        <meta property="og:title" content="About page" />
        <meta
          property="og:description"
          content="
          Get to know me better! I'm Younes LAHOUITI, a passionate web developer with 1 year of experience in JavaScript. In this page, I share my story, skills, and interests. Learn about my professional journey and discover how I can help you build engaging web experiences."
        />
        <meta property="og:image" content="/favicon.ico" />

        <meta
          property="og:url"
          content="www.younes-lahouiti-portfolio.com/about"
        />

        {/*
         <!--Title--> 
         */}
        <title>About page</title>
      </Head>
      <section className="about-page">
        <h1 className="about-page__title">About me</h1>
        <h2 className="about-page__subtitle">My introduction</h2>
        <section className="about-page__content">
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
              <div className="about-page__card"></div>
            </div>
            <div className="about-page__text"></div>
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
