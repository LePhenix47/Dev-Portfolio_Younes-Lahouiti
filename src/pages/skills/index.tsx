//Next
import Head from "next/head";
import Image from "next/image";

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
        <h1 className="skills-page">Skills</h1>
        <h2 className="skills-page__subtitle">My technical level</h2>

        <h2>Qualifications</h2>
        <h3>My path of growth and development</h3>
      </section>
    </>
  );
}
