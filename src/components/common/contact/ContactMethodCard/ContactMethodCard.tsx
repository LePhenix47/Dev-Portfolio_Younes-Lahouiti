//React
import React from "react";

//Next
import Image from "next/image";
import { formatStringCase } from "@utilities/helpers/string.helpers";

//Utils

/**
 * Represents a contact method card component for the contact page.
 *

 * @param {any} icon - The icon representing the contact method.
 * @param {string} platform - The platform or service of the contact method.
 * @param {string} user - The username or recipient of the contact method.
 * @param {string} link - The link or URL associated with the contact method.
 * @returns {JSX.Element} A JSX element representing the ContactMethodCard component.
 *
 * @example
@component
 * // Example usage:
 * <ContactMethodCard
 *   icon={contactIcon}
 *   platform="Email"
 *   user="john.doe@example
@component.com"
 *   link="mailto:john.doe@example
@component.com"
 * />
 */
export default function ContactMethodCard({
  icon,
  platform,
  user,
  link,
}: {
  icon: any;
  platform: string;
  user: string;
  link: string;
}): JSX.Element {
  return (
    <div className="contact-page__contact-card card">
      <div className="contact-page__contact-card-icon-container">
        <Image
          src={icon}
          alt={platform}
          width={32}
          height={32}
          className="contact-page__contact-card-icon"
        />
      </div>
      <div className="contact-page__contact-card-text">
        <h4 className="contact-page__contact-card-platform">{platform}</h4>
        <p className="contact-page__contact-card-user-name">{user}</p>
        <a
          href={link}
          target="_blank"
          className="contact-page__contact-card-link"
        >
          Drop me a line in my {formatStringCase(platform, "lowercase")}
        </a>
      </div>
    </div>
  );
}
