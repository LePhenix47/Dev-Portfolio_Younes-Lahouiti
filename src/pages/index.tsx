//Next
import Head from "next/head";
import Image from "next/image";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        {/*
         <!-- Meta tags-->
         */}
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Hello! My name is Younes LAHOUITI and I am a skilled web developer with 1 year of experience in JavaScript. My passion lies in creating captivating and immersive web experiences for users, utilizing modern web technologies to build dynamic and responsive websites. I am dedicated to crafting clean, efficient, and maintainable code that optimizes performance and scalability. Outside of work, I enjoy staying active by going to the gym and playing video-games. Thank you for taking the time to visit my portfolio. I look forward to collaborating with you!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home page" />
        <meta
          property="og:description"
          content="Hello! My name is Younes LAHOUITI and I am a skilled web developer with 1 year of experience in JavaScript. My passion lies in creating captivating and immersive web experiences for users, utilizing modern web technologies to build dynamic and responsive websites. I am dedicated to crafting clean, efficient, and maintainable code that optimizes performance and scalability. Outside of work, I enjoy staying active by going to the gym and playing video-games. Thank you for taking the time to visit my portfolio. I look forward to collaborating with you!"
        />
        <meta property="og:image" content="/favicon.ico" />

        <meta property="og:url" content="www.younes-lahouiti-portfolio.com" />

        {/*
         <!--Title--> 
         */}
        <title>Home page</title>
      </Head>
    </>
  );
}
