//React
import React, { useState, useRef, useEffect } from "react";

//Next
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";

//Components
import Icons from "@components/shared/icons/Icons";

import { error, log, warn } from "@utilities/helpers/console.helpers";
import { setStyleProperty } from "@utilities/helpers/dom.helpers";
import { copyTextToClipBoard } from "@utilities/helpers/navigator.helpers";

/**
 * Header component representing the top navigation bar of the website.
 * Displays a list of links and an underline for the active link.
 *
 * @returns {JSX.Element} The JSX element representing the header component.
 */
export default function Header(): JSX.Element {
  const router: NextRouter = useRouter();

  const { pathname } = router;

  const [popUpOpen, setPopUpOpen] = useState<boolean>(false);

  const [activeLinkDimensions, setActiveLinkDimensions] = useState<
    Omit<DOMRect, "toJSON">
  >({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  });

  // Unordered list
  const unorderedListRef = useRef<HTMLUListElement>(null);

  // Anchor links for the pages
  const homeLinkPageRef = useRef<HTMLAnchorElement>(null);

  const aboutLinkPageRef = useRef<HTMLAnchorElement>(null);

  const skillsLinkPageRef = useRef<HTMLAnchorElement>(null);

  const servicesLinkPageRef = useRef<HTMLAnchorElement>(null);

  const portfolioLinkPageRef = useRef<HTMLAnchorElement>(null);

  const contactLinkPageRef = useRef<HTMLAnchorElement>(null);

  const underlineListItemRef = useRef<HTMLLIElement>(null);

  const [routeLinksMap, setRouteLinksMap] = useState(
    new Map<string, NonNullable<HTMLAnchorElement>>()
  );

  function initializeRouteMap(): void {
    const tempMap = new Map<string, NonNullable<HTMLAnchorElement>>();

    tempMap.set("/", homeLinkPageRef.current!);
    tempMap.set("/about", aboutLinkPageRef.current!);
    tempMap.set("/skills", skillsLinkPageRef.current!);
    tempMap.set("/services", servicesLinkPageRef.current!);
    tempMap.set("/portfolio", portfolioLinkPageRef.current!);
    tempMap.set("/contact", contactLinkPageRef.current!);

    setRouteLinksMap(tempMap);
  }

  /**
   * Sets the dimensions for the active link based on the current URL path.
   * Updates the `activeLinkDimensions` state with the computed dimensions.
   *
   * @returns {void}
   */
  function setStateForActiveLink(): void {
    const url = new URL(location.href);

    const { pathname } = url;

    const anchorElement = routeLinksMap.get(
      pathname.toLowerCase()
    ) as HTMLAnchorElement;

    const anchorDimensions: DOMRect = anchorElement?.getBoundingClientRect();

    setActiveLinkDimensions(anchorDimensions);
  }

  useEffect(() => {
    initializeRouteMap();
  }, []);

  useEffect(() => {
    setStateForActiveLink();
    setUnderlineToLink();
  }, [routeLinksMap]);

  useEffect(() => {
    setStateForActiveLink();
    setUnderlineToLink();
  }, [router]);

  useEffect(() => {
    setUnderlineToLink();
  }, [activeLinkDimensions]);

  /**
   * Sets the position and width of the underline element based on the active link.
   * Retrieves the active link dimensions and updates the underline position.
   *
   * @returns {void}
   */
  function setUnderlineToLink(): void {
    const hasNotActiveLinkDimensions: boolean = !activeLinkDimensions;
    if (hasNotActiveLinkDimensions) {
      return;
    }

    const hasInvalidWidth: boolean = activeLinkDimensions.width <= 0;
    if (hasInvalidWidth) {
      console.warn(
        `The active link dimensions are invalid`,
        activeLinkDimensions.width
      );
    }

    const unorderedListElement = unorderedListRef.current as HTMLUListElement;

    const computedUlDimensions: DOMRect =
      unorderedListElement.getBoundingClientRect();

    const x: number = activeLinkDimensions.x - computedUlDimensions.x;

    const { width } = activeLinkDimensions;

    const liUnderlineElement: HTMLLIElement =
      underlineListItemRef.current as HTMLLIElement;

    giveUnderlineCssVariablesValues({ width, x, liUnderlineElement });
  }

  /**
   * Sets the CSS variables for the `<li>` underline.
   * Updates the `--_translation-x` and `--_width` CSS variables.
   *
   * @param {number} width - Width of the `<li>` underline.
   * @param {number} x - X offset of the `<li>` underline.
   * @param {HTMLLIElement} liUnderlineElement - The LI element to set the CSS variables for the underline.
   * @returns {void}
   */
  function giveUnderlineCssVariablesValues({
    width,
    x,
    liUnderlineElement,
  }: {
    width: number;
    x: number;
    liUnderlineElement: HTMLLIElement;
  }): void {
    // We set the position of the underline element
    const normalizedXTranslation: string = Math.round(x) + "px";
    setStyleProperty(
      "--_translation-x",
      normalizedXTranslation,
      liUnderlineElement
    );

    const normalizedWidth: string = Math.round(width) + "px";
    setStyleProperty("--_width", normalizedWidth, liUnderlineElement);
  }

  /**
   * Shows the tooltip when the portfolio link is copied to clipboard.
   * Copies the URL to the clipboard and sets the `popUpOpen` state to display the tooltip.
   *
   * @returns {Promise<void>}
   */
  async function showCopiedToolTip(): Promise<void> {
    //We copy the URL of the portfolio so that the visitor can share it.
    try {
      copyTextToClipBoard(location.href);
      log("Copied to clipboard!");
    } catch (copyClipboardError) {
      error(copyClipboardError);
    } finally {
      setPopUpOpen(true);

      setTimeout(() => {
        setPopUpOpen(false);
      }, 500);
    }
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

      <section
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
      </section>
      <nav className="header__nav">
        <ul className="header__list" ref={unorderedListRef}>
          <li
            className={`header__item
          ${pathname === "/" && "active"}
          `}
          >
            <Link href="/" className="header__item-link" ref={homeLinkPageRef}>
              <Icons.HomeMobile width={24} height={24} fill={"currentColor"} />
              Home
            </Link>
          </li>
          <li
            className={`header__item
          ${pathname === "/about" && "active"}
          `}
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
            className={`header__item
          ${pathname === "/skills" && "active"}
          `}
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
            className={`header__item
          ${pathname === "/services" && "active"}
          `}
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
            className={`header__item
          ${pathname === "/portfolio" && "active"}
          `}
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
            className={`header__item
          ${pathname === "/contact" && "active"}
          `}
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
          <li
            className={"header__item header__item-follow"}
            ref={underlineListItemRef}
          >
            &nbsp;
          </li>
        </ul>
      </nav>
    </header>
  );
}
