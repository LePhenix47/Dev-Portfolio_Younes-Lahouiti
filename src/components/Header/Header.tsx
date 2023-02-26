//React
import React from "react";

//Next
import { NextRouter, useRouter } from "next/router";

//Components
import NavLink from "../NavLink/NavLink";
import { log } from "@/react-utils/functions/helper-functions";

export default function Header(): JSX.Element {
  const router: NextRouter = useRouter();

  const { route, pathname, query, asPath } = router;

  return (
    <header className="header">
      <div className="header__dev">
        <p className="header__dev-name">Younes Lahouiti</p>
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          <li
            className={`header__item header__item-home ${
              asPath === "/" ? "active" : ""
            }`}
          >
            <NavLink href="/">Home</NavLink>
          </li>
          <li
            className={`header__item header__item-about ${
              asPath === "/about" ? "active" : ""
            }`}
          >
            <NavLink href="/about">About</NavLink>
          </li>
          <li
            className={`header__item header__item-skills ${
              asPath === "/skills" ? "active" : ""
            }`}
          >
            <NavLink href="/skills">Skills</NavLink>
          </li>
          <li
            className={`header__item header__item-services ${
              asPath === "/services" ? "active" : ""
            }`}
          >
            <NavLink href="/services">Services</NavLink>
          </li>
          <li
            className={`header__item header__item-portfolio ${
              asPath === "/portfolio" ? "active" : ""
            }`}
          >
            <NavLink href="/portfolio">Portfolio</NavLink>
          </li>
          <li
            className={`header__item header__item-contact ${
              asPath === "/contact" ? "active" : ""
            }`}
          >
            <NavLink href="/contact">Contact</NavLink>
          </li>
          <li className={`header__item header__item-follow`}>&nbsp;</li>
        </ul>
      </nav>
    </header>
  );
}
