//React
import React from "react";

//Next
import Image from "next/image";
import Link from "next/link";

export default function PortfolioProjectCard({
  title,
  image,
  link,
  formattedDate,
  type,
}: {
  title: string;
  image: any;
  link: string;
  formattedDate: string;
  type: string;
}): JSX.Element {
  let sentenceToViewProjectCode: string = "View source code";

  switch (type) {
    case "npm": {
      sentenceToViewProjectCode = "View the library";
      break;
    }

    case "extension": {
      sentenceToViewProjectCode = "See the browser extension";
      break;
    }

    case "professional": {
      sentenceToViewProjectCode = "View the website";
      break;
    }

    default: {
      break;
    }
  }

  return (
    <div className="portfolio-page__project-card card">
      <div className="portfolio-page__project-card-image-container">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="portfolio-page__project-card-image"
        />
      </div>
      <div className="portfolio-page__project-card-text">
        <h3 className="portfolio-page__project-card-title">{title}</h3>
        <p className="portfolio-page__project-card-date">
          Made the: {formattedDate}
        </p>
        <Link
          href={link}
          target="_blank"
          className="portfolio-page__project-card-link"
        >
          {sentenceToViewProjectCode + " "}
          <span className="portfolio-page__project-card-link-arrow">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
