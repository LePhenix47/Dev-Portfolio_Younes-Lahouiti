//Next
import Head from "next/head";
import Image from "next/image";

export default function Contact(): JSX.Element {
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
          Let's get in touch! I'm always eager to connect with new people and discuss exciting projects. On this page, you'll find different ways to reach out to me, from email to social media. Don't hesitate to drop me a message and let's create something amazing together!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact page" />
        <meta
          property="og:description"
          content="
          Let's get in touch! I'm always eager to connect with new people and discuss exciting projects. On this page, you'll find different ways to reach out to me, from email to social media. Don't hesitate to drop me a message and let's create something amazing together!"
        />
        <meta property="og:image" content="/favicon.ico" />

        <meta
          property="og:url"
          content="www.younes-lahouiti-portfolio.com/contact"
        />

        {/*
         <!--Title--> 
         */}
        <title>Contact page</title>
      </Head>
    </>
  );
}
