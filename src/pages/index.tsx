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
import { JPG_URLS } from "@assets/index.constants";

import Icons from "@components/shared/icons/Icons";

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
        needsRobotCrawlers={home.needsRobotCrawlers}
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
