import Link from "next/link";
import Image from "next/image";
import React from "react";
import { formatStringCase } from "@utilities/helpers/string.helpers";

/**
 * Represents an item for the social media card on the home page.
 *

 * @param {string} srcIcon - The URL of the icon representing the social media platform.
 * @param {string} title - The title or name of the social media platform.
 * @param {string} link - The link or URL associated with the social media platform.
 * @returns {JSX.Element} A JSX element representing the HomeSocialCardItem component.
 *
 * @example
@component
 * // Example usage:
 * <HomeSocialCardItem
 *   srcIcon="/path/to/linkedin-icon.png"
 *   title="LinkedIn"
 *   link="https://www.linkedin.com/in/johndoe"
 * />
 */
export default function HomeSocialCardItem({
  srcIcon,
  title,
  link,
  needsInversionOnDarkMode,
}: {
  srcIcon: string;
  title: string;
  link: string;
  needsInversionOnDarkMode: boolean;
}): JSX.Element {
  return (
    <li className="home-page__social-item">
      <Link
        className="home-page__social-link"
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
          className={`home-page__social-image ${
            needsInversionOnDarkMode
              ? "home-page__social--dark-mode-inverted "
              : ""
          }`}
        />
      </Link>
    </li>
  );
}
