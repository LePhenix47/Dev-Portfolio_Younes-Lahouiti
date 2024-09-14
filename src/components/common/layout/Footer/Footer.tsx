//React
import React, { useState } from "react";

//Link
import Link from "next/link";
import Image from "next/image";
import Icons from "@components/shared/icons/Icons";
import { ModalWindow } from "@components/shared/shared.components";
import { socialAccountVariables } from "@utilities/variables/common/home/social-accounts.variables";

/**
 * Footer component representing the bottom section of the website.
 * Displays links to the source code and bug reporting on GitHub, and the copyright notice.
 *
 * @returns {JSX.Element} The JSX element representing the footer component.
 */
export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear();

  const [socialMediaPopupOpen, setSocialMediaPopupOpen] = useState(false);

  return (
    <footer className="footer">
      <section className="footer__github-links">
        <Link
          href="https://github.com/LePhenix47/Dev-Portfolio_Younes-Lahouiti"
          className="footer__link"
          target="_blank"
        >
          <span className="footer__github-links--desktop-span">
            View the source code for the portfolio ?
          </span>
          <Icons.OpenLink width={18} height={18} fill={"currentColor"} />
        </Link>

        <Link
          href="https://github.com/LePhenix47/Dev-Portfolio_Younes-Lahouiti/issues"
          className="footer__link"
          target="_top"
        >
          <span className="footer__github-links--desktop-span">
            Report a bug ?
          </span>
          <Icons.Bug width={18} height={18} fill={"currentColor"} />
        </Link>

        <button
          className="footer__link"
          onClick={() => setSocialMediaPopupOpen(true)}
        >
          <span className="footer__github-links--desktop-span">
            Checkout social media
          </span>
          <Icons.World width={18} height={18} fill={"currentColor"} />
        </button>
      </section>

      <ModalWindow
        isOpen={socialMediaPopupOpen}
        setIsOpen={setSocialMediaPopupOpen}
      >
        <ul className="footer__social-list">
          {socialAccountVariables.map((account, index: number) => {
            const { srcIcon, title, link, needsInversionOnDarkMode } = account;

            return (
              <li key={index} className="footer__social-item">
                <Link
                  className="footer__social-link"
                  href={link}
                  target="_blank"
                  title={title}
                >
                  <Image
                    src={srcIcon}
                    alt="LinkedIn icon"
                    height={30}
                    width={30}
                    priority
                    className={`footer__social-image ${
                      needsInversionOnDarkMode ? "invert--dark-mode-only" : ""
                    }`}
                  />

                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </ModalWindow>

      <small className="footer__copyright">
        Younes Lahouiti © 2021-{currentYear}. All rights reserved.
      </small>
    </footer>
  );
}
