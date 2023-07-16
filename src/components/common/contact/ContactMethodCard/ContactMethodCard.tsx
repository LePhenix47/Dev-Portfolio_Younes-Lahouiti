//React
import React from "react";

//Next
import Image from "next/image";

//Utils
import { formatStringCase } from "@/react-utils/functions/helper-functions";

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
