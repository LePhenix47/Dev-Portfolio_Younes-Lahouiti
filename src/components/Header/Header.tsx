//React
import React, { useState } from "react";

//Next
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";

//Components
import {
  copyTextToClipBoard,
  log,
} from "@/react-utils/functions/helper-functions";

export default function Header(): JSX.Element {
  const router: NextRouter = useRouter();

  const { route, pathname, query, asPath } = router;

  const [popUpOpen, setPopUpOpen] = useState<boolean>(false);

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
        onClick={(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
          showCopiedToolTip(e);
        }}
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
        <ul className="header__list">
          <li
            className={`header__item header__item-home ${
              asPath === "/" ? "active" : ""
            }`}
          >
            <Link href="/" className="header__item-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                fill="currentColor"
              >
                <path d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z" />
              </svg>
              Home
            </Link>
          </li>
          <li
            className={`header__item header__item-about ${
              asPath === "/about" ? "active" : ""
            }`}
          >
            <Link href="/about" className="header__item-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width={24}
                height={24}
              >
                <g data-name="Layer 2">
                  <path
                    d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm6 10a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"
                    data-name="person"
                  />
                </g>
              </svg>
              About
            </Link>
          </li>
          <li
            className={`header__item header__item-skills ${
              asPath === "/skills" ? "active" : ""
            }`}
          >
            <Link href="/skills" className="header__item-link">
              <svg
                id="svg"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 400 400"
              >
                <g id="svgg">
                  <path
                    id="path0"
                    d="M87.500 14.543 C 79.831 16.960,66.752 30.503,64.400 38.463 C 61.659 47.740,61.659 352.260,64.400 361.537 C 66.936 370.120,79.880 383.064,88.463 385.600 C 97.674 388.321,302.326 388.321,311.537 385.600 C 320.612 382.919,333.189 370.078,335.693 360.938 C 339.306 347.753,337.511 114.941,333.736 107.031 C 328.316 95.675,249.243 18.115,239.956 15.045 C 230.483 11.914,97.233 11.475,87.500 14.543 M225.000 65.053 C 225.000 116.712,233.288 125.000,284.947 125.000 L 312.500 125.000 312.500 239.915 L 312.500 354.830 308.665 358.665 L 304.830 362.500 200.000 362.500 L 95.170 362.500 91.335 358.665 L 87.500 354.830 87.500 200.000 L 87.500 45.170 91.335 41.335 L 95.170 37.500 160.085 37.500 L 225.000 37.500 225.000 65.053 M272.656 78.125 L 294.489 100.000 276.080 100.000 C 250.659 100.000,250.000 99.351,250.000 74.290 C 250.000 64.368,250.185 56.250,250.412 56.250 C 250.638 56.250,260.648 66.094,272.656 78.125 M128.835 78.835 C 126.418 81.253,125.000 84.456,125.000 87.500 C 125.000 98.704,128.889 100.000,162.500 100.000 C 196.111 100.000,200.000 98.704,200.000 87.500 C 200.000 76.296,196.111 75.000,162.500 75.000 C 132.912 75.000,132.639 75.031,128.835 78.835 M128.835 153.835 C 126.418 156.253,125.000 159.456,125.000 162.500 C 125.000 165.544,126.418 168.747,128.835 171.165 L 132.670 175.000 187.500 175.000 L 242.330 175.000 246.165 171.165 C 248.582 168.747,250.000 165.544,250.000 162.500 C 250.000 159.456,248.582 156.253,246.165 153.835 L 242.330 150.000 187.500 150.000 L 132.670 150.000 128.835 153.835 M128.835 228.835 C 126.418 231.253,125.000 234.456,125.000 237.500 C 125.000 240.544,126.418 243.747,128.835 246.165 L 132.670 250.000 200.000 250.000 L 267.330 250.000 271.165 246.165 C 273.582 243.747,275.000 240.544,275.000 237.500 C 275.000 234.456,273.582 231.253,271.165 228.835 L 267.330 225.000 200.000 225.000 L 132.670 225.000 128.835 228.835 M153.835 303.835 C 151.418 306.253,150.000 309.456,150.000 312.500 C 150.000 315.544,151.418 318.747,153.835 321.165 L 157.670 325.000 200.000 325.000 L 242.330 325.000 246.165 321.165 C 248.582 318.747,250.000 315.544,250.000 312.500 C 250.000 309.456,248.582 306.253,246.165 303.835 L 242.330 300.000 200.000 300.000 L 157.670 300.000 153.835 303.835 "
                    stroke="none"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </g>
              </svg>
              Skills
            </Link>
          </li>
          <li
            className={`header__item header__item-services ${
              asPath === "/services" ? "active" : ""
            }`}
          >
            <Link href="/services" className="header__item-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                fill="currentColor"
              >
                <g data-name="Layer 2">
                  <path
                    d="M7 21h10V7h-1V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H7zm3-15.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4zM19 7v14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zM5 7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z"
                    data-name="briefcase"
                  />
                </g>
              </svg>
              Services
            </Link>
          </li>
          <li
            className={`header__item header__item-portfolio ${
              asPath === "/portfolio" ? "active" : ""
            }`}
          >
            <Link href="/portfolio" className="header__item-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                fill="currentColor"
              >
                <path d="M19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a2.81,2.81,0,0,0,.49-.05l.3-.07.07,0h0l.05,0,.37-.14.13-.07c.1-.06.21-.11.31-.18a3.79,3.79,0,0,0,.38-.32l.07-.09a2.69,2.69,0,0,0,.27-.32l.09-.13a2.31,2.31,0,0,0,.18-.35,1,1,0,0,0,.07-.15c.05-.12.08-.25.12-.38l0-.15A2.6,2.6,0,0,0,22,19V5A3,3,0,0,0,19,2ZM5,20a1,1,0,0,1-1-1V14.69l3.29-3.3h0a1,1,0,0,1,1.42,0L17.31,20Zm15-1a1,1,0,0,1-.07.36,1,1,0,0,1-.08.14.94.94,0,0,1-.09.12l-5.35-5.35.88-.88a1,1,0,0,1,1.42,0h0L20,16.69Zm0-5.14L18.12,12a3.08,3.08,0,0,0-4.24,0l-.88.88L10.12,10a3.08,3.08,0,0,0-4.24,0L4,11.86V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1ZM13.5,6A1.5,1.5,0,1,0,15,7.5,1.5,1.5,0,0,0,13.5,6Z" />
              </svg>
              Portfolio
            </Link>
          </li>
          <li
            className={`header__item header__item-contact ${
              asPath === "/contact" ? "active" : ""
            }`}
          >
            <Link
              href="/contact"
              id="contact-page-link"
              className="header__item-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
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
              Contact
            </Link>
          </li>
          <li className={`header__item header__item-follow`}>&nbsp;</li>
        </ul>
      </nav>
    </header>
  );
}
