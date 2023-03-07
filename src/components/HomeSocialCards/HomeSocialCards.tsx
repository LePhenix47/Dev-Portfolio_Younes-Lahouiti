import Link from "next/link";
import Image from "next/image";
import React from "react";
import { formatText } from "@/react-utils/functions/helper-functions";

export default function HomeSocialCardItem({
  srcIcon,
  title,
  link,
}: {
  srcIcon: string;
  title: string;
  link: string;
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
          className={`home-page__social-image home-page__social-image-${formatText(
            title,
            "lowercase"
          )}`}
        />
      </Link>
    </li>
  );
}
