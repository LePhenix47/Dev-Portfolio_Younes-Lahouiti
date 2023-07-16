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
        <meta property="og:image" content="/profile-pic.jpg" />
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
              , a <strong>web developer</strong> with a passion for creating
              <em>beautiful and functional websites</em>. With strong
              problem-solving skills and a keen eye for detail, I can create
              websites that not only <em>look great</em>, but also{" "}
              <em>perform well</em>. Let&apos;s bring your vision to life
              together!
            </p>

            <Link href="/contact" className="link-button">
              Hit me up!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="home-page__blob">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(100 100)">
                <path
                  fill="currentColor"
                  stroke="grey"
                  strokeWidth={3}
                  d="M65.7,-25.5C71.7,-2.7,54,23.6,32.6,37.3C11.3,51,-13.6,52,-28.7,40.8C-43.7,29.6,-48.8,6,-42.4,-17.3C-36,-40.7,-18,-63.8,5.9,-65.7C29.8,-67.6,59.6,-48.3,65.7,-25.5Z"
                ></path>
              </g>
            </svg>
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
