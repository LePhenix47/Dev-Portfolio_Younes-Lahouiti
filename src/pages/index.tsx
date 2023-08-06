//React
import { useRef } from "react";

//Next

import Image from "next/image";
import Link from "next/link";

//Utils
import { socialAccountVariables } from "@utilities/variables/common/home/social-accounts.variables";

//Components
import {
  CanvasComponent,
  MetaData,
} from "@components/shared/shared.components";

import {
  PAGE_METADATA,
  OPEN_GRAPH,
} from "@utilities/variables/shared/index-shared.variables";

import { HomeSocialCardItem } from "@components/common/home/home-page.components";
import { JPG_URLS } from "@assets/index.assets";

import Icons from "@components/shared/icons/Icons";

/**
 * Home page component: `/`
 *
 * This component represents the home page of the website. It includes information about the developer, social media links, and a call-to-action (CTA) button to contact the developer.
 *
 * @returns {JSX.Element} The JSX element representing the home page.
 */
export default function Home(): JSX.Element {
  const homePageSectionRef = useRef<HTMLElement>(null);

  const { home } = PAGE_METADATA;

  return (
    <>
      <MetaData
        title={home.title}
        description={home.description}
        pageUri={home.pageUri}
        needsIndexation={home.needsIndexation}
        allowRobotCrawlers={home.allowRobotCrawlers}
        openGraph={OPEN_GRAPH}
      />
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
              , a passionate <strong>web developer</strong> creating beautiful
              and functional websites.
              <em>
                {" "}
                Started with Scratch and Python, coding is my love. College
                didn&apos;t fit, but self-learning led me to web development.
              </em>{" "}
              <br />
              Now, with strong problem-solving skills and a keen eye for detail,
              I craft <strong>captivating websites and applications</strong>.
              Let&apos;s build something amazing together!
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
