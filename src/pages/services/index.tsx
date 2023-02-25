//Next
import Head from "next/head";
import Image from "next/image";

export default function Services(): JSX.Element {
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
          Welcome to my services page. As a skilled web developer with experience in integrating mockups and conducting unit and integration tests with Jest, I offer services in website development. I specialize in building dynamic and responsive websites using modern web technologies to enhance user experience. Whether you need a website built from scratch or require debugging of an existing one, I can help. Let's work together to bring your ideas to life"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Services page" />
        <meta
          property="og:description"
          content="
          Welcome to my services page. As a skilled web developer with experience in integrating mockups and conducting unit and integration tests with Jest, I offer services in website development. I specialize in building dynamic and responsive websites using modern web technologies to enhance user experience. Whether you need a website built from scratch or require debugging of an existing one, I can help. Let's work together to bring your ideas to life"
        />
        <meta property="og:image" content="/favicon.ico" />

        <meta
          property="og:url"
          content="www.younes-lahouiti-portfolio.com/services"
        />

        {/*
         <!--Title--> 
         */}
        <title>Services page</title>
      </Head>
    </>
  );
}
