//React
import React from "react";

//Next
import NavLink from "../NavLink/NavLink";

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header__dev">
        <p className="header__dev-name">Younes Lahouiti</p>
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink href="/">Home</NavLink>
          </li>
          <li className="header__item">
            <NavLink href="/about">About</NavLink>
          </li>
          <li className="header__item">
            <NavLink href="/skills">Skills</NavLink>
          </li>
          <li className="header__item">
            <NavLink href="/services">Services</NavLink>
          </li>
          <li className="header__item">
            <NavLink href="/portfolio">Portfolio</NavLink>
          </li>
          <li className="header__item">
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
