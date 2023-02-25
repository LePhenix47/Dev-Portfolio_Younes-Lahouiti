//Next
import Head from "next/head";
import Image from "next/image";

export default function About() {
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
    </>
  );
}
