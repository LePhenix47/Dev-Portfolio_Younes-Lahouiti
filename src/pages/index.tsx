//React
import { useRef } from "react";

//Next
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

//Utils
import { socialAccountVariables } from "@/react-utils/variables/social-accounts.variables";

//Components
import { CanvasComponent } from "@/components/shared/shared.components";
import { HomeSocialCardItem } from "@/components/common/home/home-page.components";
import { JPG_URLS } from "@/react-utils/constants/index.constants";

import Icons from "@/components/shared/icons/Icons";

export default function Home(): JSX.Element {
  const homePageSectionRef = useRef<HTMLElement>(null);
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
        {/* Open Graph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home page" />
        <meta
          property="og:description"
          content="Hello! My name is Younes LAHOUITI and I am a skilled web developer with 1 year of experience in JavaScript. My passion lies in creating captivating and immersive web experiences for users, utilizing modern web technologies to build dynamic and responsive websites. I am dedicated to crafting clean, efficient, and maintainable code that optimizes performance and scalability. Outside of work, I enjoy staying active by going to the gym and playing video-games. Thank you for taking the time to visit my portfolio. I look forward to collaborating with you!"
        />
        <meta
          property="og:image"
          content="https://younes-portfolio-dev.vercel.app/_next/image?url=%2Fjpg%2Fprofile-pic.jpg&w=256&q=75"
        />
        <meta property="og:image:width" content="130" />
        <meta property="og:image:height" content="170" />
        <meta
          property="og:url"
          content="https://younes-portfolio-dev.vercel.app/"
        />
        {/*
         <!--Title--> 
         */}
        <title>Home page</title>
      </Head>
      <section className="home-page" ref={homePageSectionRef}>
        <CanvasComponent parentElement={homePageSectionRef} />
        <aside className="home-page__socials">
          <ul className="home-page__social-list">
            {socialAccountVariables.map((account, index: number) => {
              const { srcIcon, title, link } = account;

              return (
                <HomeSocialCardItem
                  key={`${index}-${title}-${link}`}
                  title={title}
                  srcIcon={srcIcon}
                  link={link}
                />
              );
            })}
          </ul>
        </aside>
        <div className="home-page__presentation">
          <div className="home-page__description">
            <h1 className="home-page__title">
              Hi, I&apos;m Younes Lahouiti{" "}
              <span className="home-page__title-hand">🖐</span>
            </h1>
            <h2 className="home-page__subtitle">
              <em>Fullstack developer</em>
            </h2>
            <p
              className="home-page__paragraph"
              itemScope
              itemType="http://schema.org/Person"
            >
              I&apos;m{" "}
              <strong>
                <span itemProp="name">Younes Lahouiti</span>
              </strong>
              , a <strong>web developer</strong> with a passion for creating{" "}
              <em>beautiful and functional websites</em>. With strong
              problem-solving skills and a keen eye for detail, I can create
              websites that not only <em>look great</em>, but also{" "}
              <em>perform well</em>. Let&apos;s bring your vision to life
              together!
            </p>

            <Link href="/contact" className="link-button">
              Hit me up!
              <Icons.PaperPlane width={24} height={24} fill={"currentColor"} />
            </Link>
          </div>
          <div className="home-page__blob">
            <Icons.Blob />
            <Image
              src={JPG_URLS.PROFILE_PIC_1}
              alt="Profile picture"
              height={170}
              width={130}
              priority
              className="home-page__profile-picture"
            />
          </div>
        </div>
      </section>
    </>
  );
}
