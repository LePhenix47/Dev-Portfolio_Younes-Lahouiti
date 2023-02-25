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
      <section className="home-page">
        <aside className="home-page__socials">
          <ul className="home-page__social-list">
            <li className="home-page__social-item">
              <Image
                src="https://raw.githubusercontent.com/danielcranney/profileme-dev/4442a351ea1871ad8ba08a4ec82cb8eae9d73b8b/public/icons/socials/linkedin.svg"
                alt="LinkedIn icon"
                height={30}
                width={30}
                className="home-page__social-image"
              />
            </li>
            <li className="home-page__social-item">
              <Image
                src="https://raw.githubusercontent.com/danielcranney/profileme-dev/4442a351ea1871ad8ba08a4ec82cb8eae9d73b8b/public/icons/socials/twitter.svg"
                alt="Twitter icon"
                height={30}
                width={30}
                className="home-page__social-image"
              />
            </li>
            <li className="home-page__social-item">
              <Image
                src="https://raw.githubusercontent.com/danielcranney/profileme-dev/4442a351ea1871ad8ba08a4ec82cb8eae9d73b8b/public/icons/socials/youtube.svg"
                alt="Youtube icon"
                height={30}
                width={30}
                className="home-page__social-image"
              />
            </li>
            <li className="home-page__social-item">
              <Image
                src="https://raw.githubusercontent.com/danielcranney/profileme-dev/4442a351ea1871ad8ba08a4ec82cb8eae9d73b8b/public/icons/socials/github.svg"
                alt="GitHub icon"
                height={30}
                width={30}
                className="home-page__social-image"
              />
            </li>
            <li className="home-page__social-item">
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/stackoverflow.svg"
                alt="StackOverflow icon"
                height={30}
                width={30}
                className="home-page__social-image"
              />
            </li>
            <li className="home-page__social-item">
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/npm/npm-original-wordmark.svg"
                alt="npm icon"
                height={30}
                width={30}
                className="home-page__social-image"
              />
            </li>
            <li className="home-page__social-item">
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg"
                alt="Discord icon"
                height={30}
                width={30}
                className="home-page__social-image"
              />
            </li>
            <li className="home-page__social-item">
              <Image
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/codepen.svg"
                alt="CodePen icon"
                height={30}
                width={30}
                className="home-page__social-image"
              />
            </li>
          </ul>
        </aside>
        <div className="home-page__presentation">
          <div className="home-page__description">
            <h1 className="home-page__title">Younes Lahouiti</h1>
          </div>
          <div className="home-page__blob">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(100 100)">
                <path
                  fill="currentColor"
                  d="M65.7,-25.5C71.7,-2.7,54,23.6,32.6,37.3C11.3,51,-13.6,52,-28.7,40.8C-43.7,29.6,-48.8,6,-42.4,-17.3C-36,-40.7,-18,-63.8,5.9,-65.7C29.8,-67.6,59.6,-48.3,65.7,-25.5Z"
                ></path>
              </g>
            </svg>
            <Image
              src="/profile-pic.jpg"
              alt="Profile picture"
              height={170}
              width={130}
              className="home-page__profile-picture"
            />
          </div>
        </div>
      </section>
    </>
  );
}
