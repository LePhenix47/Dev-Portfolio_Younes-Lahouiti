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
import {
  addClass,
  removeClass,
  setStyleProperty,
} from "@utilities/helpers/dom.helpers";

/**
 * Home page component: `/`
 *
 * This component represents the home page of the website. It includes information about the developer, social media links, and a call-to-action (CTA) button to contact the developer.
 *
 * @returns {JSX.Element} The JSX element representing the home page.
 */
export default function Home(): JSX.Element {
  const homePageSectionRef = useRef<HTMLElement>(null);
  const blobDivRef = useRef<HTMLDivElement>(null);

  const { home } = PAGE_METADATA;

  /**
   * Updates the CSS variables of the blob element to rotate it.
   *
   * @param e - The mouse event object containing information about the mouse movement.
   */
  function rotateBlob(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const blobDiv = blobDivRef.current as HTMLDivElement;
    removeClass(blobDiv, "home-page__blob--mouse-leave");

    const blobDomRect: DOMRect = blobDiv.getBoundingClientRect();

    const {
      x: blobX,
      y: blobY,
      width: blobWidth,
      height: blobHeight,
    } = blobDomRect;

    const centerBlobX: number = blobWidth / 2;
    const centerBlobY: number = blobHeight / 2;

    // Max rotation allowed in degrees
    const MAX_ROTATION: number = 45;

    const offsetX: number =
      ((e.pageX - (blobX + centerBlobX)) / centerBlobX) * MAX_ROTATION;

    const offsetY: number =
      ((e.pageY - (blobY + centerBlobY)) / centerBlobY) * MAX_ROTATION;

    setStyleProperty("--_rotate-y", offsetX + "deg", blobDiv);
    setStyleProperty("--_rotate-x", -1 * offsetY + "deg", blobDiv);
  }

  function resetBlob() {
    const blobDiv = blobDivRef.current as HTMLDivElement;
    addClass(blobDiv, "home-page__blob--mouse-leave");

    setStyleProperty("--_rotate-y", 0, blobDiv);
    setStyleProperty("--_rotate-x", 0, blobDiv);
  }

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
              const { srcIcon, title, link, needsInversionOnDarkMode } =
                account;

              return (
                <HomeSocialCardItem
                  key={`${index}-${title}-${link}`}
                  title={title}
                  srcIcon={srcIcon}
                  link={link}
                  needsInversionOnDarkMode={needsInversionOnDarkMode}
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
          <div
            className="home-page__blob"
            onMouseMove={rotateBlob}
            onMouseLeave={resetBlob}
            ref={blobDivRef}
          >
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
