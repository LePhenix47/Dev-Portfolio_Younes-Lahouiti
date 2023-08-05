//React
import React, { useState, useRef, useEffect } from "react";

//Next
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";

//Components
import Icons from "@components/shared/icons/Icons";

import { copyTextToClipBoard } from "@utilities/helpers/string.helpers";
import { log } from "@utilities/helpers/console.helpers";

export default function Header(): JSX.Element {
  const router: NextRouter = useRouter();

  const { route, pathname, query, asPath } = router;

  const [popUpOpen, setPopUpOpen] = useState<boolean>(false);

  const [activeLinkDimensions, setActiveLinkDimensions] =
    useState<DOMRect | null>(null);

  // Unordered list
  const unorderedListRef = useRef<HTMLUListElement>(null);

  // Anchor links for the pages
  const homeLinkPageRef = useRef<HTMLAnchorElement>(null);

  const aboutLinkPageRef = useRef<HTMLAnchorElement>(null);

  const skillsLinkPageRef = useRef<HTMLAnchorElement>(null);

  const servicesLinkPageRef = useRef<HTMLAnchorElement>(null);

  const portfolioLinkPageRef = useRef<HTMLAnchorElement>(null);

  const contactLinkPageRef = useRef<HTMLAnchorElement>(null);

  //
  function setStateForActiveLink(): void {
    let anchorElement: HTMLAnchorElement | null = null;

    let anchorDimensions: DOMRect | null = null;
    switch (asPath) {
      case "/": {
        anchorElement = homeLinkPageRef.current as HTMLAnchorElement;
        break;
      }
      case "/about": {
        anchorElement = aboutLinkPageRef.current as HTMLAnchorElement;
        break;
      }
      case "/skills": {
        anchorElement = skillsLinkPageRef.current as HTMLAnchorElement;
        break;
      }
      case "/services": {
        anchorElement = servicesLinkPageRef.current as HTMLAnchorElement;
        break;
      }
      case "/portfolio": {
        anchorElement = portfolioLinkPageRef.current as HTMLAnchorElement;
        break;
      }
      case "/contact": {
        anchorElement = contactLinkPageRef.current as HTMLAnchorElement;
        break;
      }

      default: {
        console.warn("Link of page not found");
        break;
      }
    }

    const hasNoLink: boolean = !anchorElement;
    if (hasNoLink) {
      setActiveLinkDimensions({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        toJSON: () => {},
      });
      return;
    }

    anchorDimensions = (
      anchorElement as HTMLAnchorElement
    ).getBoundingClientRect();

    setActiveLinkDimensions(anchorDimensions as DOMRect);
  }

  useEffect(() => {
    // Won't work
    setStateForActiveLink();
    setUnderlineToLink();
  }, [asPath]);

  function setUnderlineToLink() {
    const hasNotActiveLinkDimensions: boolean =
      !activeLinkDimensions || !(activeLinkDimensions instanceof DOMRect);
    if (hasNotActiveLinkDimensions) {
      return;
    }

    const unorderedListElement: HTMLUListElement =
      unorderedListRef.current as HTMLUListElement;

    const ulDimensions: DOMRect = unorderedListElement.getBoundingClientRect();

    // @ts-ignore, TS throws errors here because I didn't directly set the check in the if statement
    const left: number = activeLinkDimensions.x - ulDimensions.x;

    // @ts-ignore, TS throws errors here because
    const width: number = activeLinkDimensions.width - ulDimensions.width;

    return {
      left,
      width,
    };
  }

  async function showCopiedToolTip(
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) {
    //We copy the URL of the portfolio so that the visitor can share it.
    copyTextToClipBoard("https://younes-portfolio-dev.vercel.app/");

    setPopUpOpen(true);

    setTimeout(() => {
      setPopUpOpen(false);
    }, 500);
    log("Copied to clipboard!");
  }

  return (
    <header className="header">
      <section className="header__open-menu-mobile">
        <input
          type="checkbox"
          name="open-menu-button"
          id="open-menu-button"
          className="header__open-menu-mobile-checkbox"
        />
        <label
          htmlFor="open-menu-button"
          className="header__open-menu-mobile-label"
        ></label>
      </section>

      <div
        className="header__dev"
        title="Share the portfolio link?"
        onClick={showCopiedToolTip}
      >
        <p className="header__dev-name">Younes-Portfolio-Dev</p>
        <div
          className={`header__dev-pop-up ${
            popUpOpen ? "header__dev-pop-up--active" : "fade-out"
          }`}
        >
          <p className="header__dev-pop-up-paragraph">Copied!</p>
        </div>
      </div>
      <nav className="header__nav">
        <ul className="header__list" ref={unorderedListRef}>
          <li
            className={`header__item header__item-home ${
              asPath === "/" && "active"
            }`}
          >
            <Link href="/" className="header__item-link" ref={homeLinkPageRef}>
              <Icons.HomeMobile width={24} height={24} fill={"currentColor"} />
              Home
            </Link>
          </li>
          <li
            className={`header__item header__item-about ${
              asPath === "/about" && "active"
            }`}
          >
            <Link
              href="/about"
              className="header__item-link"
              ref={aboutLinkPageRef}
            >
              <Icons.AboutMobile width={24} height={24} fill={"currentColor"} />
              About
            </Link>
          </li>
          <li
            className={`header__item header__item-skills ${
              asPath === "/skills" && "active"
            }`}
          >
            <Link
              href="/skills"
              className="header__item-link"
              ref={skillsLinkPageRef}
            >
              <Icons.SkillsMobile
                width={24}
                height={24}
                fill={"currentColor"}
              />
              Skills
            </Link>
          </li>
          <li
            className={`header__item header__item-services ${
              asPath === "/services" && "active"
            }`}
          >
            <Link
              href="/services"
              className="header__item-link"
              ref={servicesLinkPageRef}
            >
              <Icons.ServicesMobile
                width={24}
                height={24}
                fill={"currentColor"}
              />
              Services
            </Link>
          </li>
          <li
            className={`header__item header__item-portfolio ${
              asPath === "/portfolio" && "active"
            }`}
          >
            <Link
              href="/portfolio"
              className="header__item-link"
              ref={portfolioLinkPageRef}
            >
              <Icons.PortfolioMobile
                width={24}
                height={24}
                fill={"currentColor"}
              />
              Portfolio
            </Link>
          </li>
          <li
            className={`header__item header__item-contact ${
              asPath === "/contact" && "active"
            }`}
          >
            <Link
              href="/contact"
              className="header__item-link"
              ref={contactLinkPageRef}
            >
              <Icons.ContactMobile
                width={24}
                height={24}
                fill={"currentColor"}
              />
              Contact
            </Link>
          </li>
          {/*  The &nbsp; is an HTML unicode character for non-breaking space */}
          <li className={`header__item header__item-follow`}>&nbsp;</li>
        </ul>
      </nav>
    </header>
  );
}
