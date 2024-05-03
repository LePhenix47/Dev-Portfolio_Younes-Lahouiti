//React
import React from "react";

//Next
import Image from "next/image";
import Link from "next/link";
import Icons from "@components/shared/icons/Icons";

type PortfolioProjectCardProps = {
  title: string;
  image: any;
  link: string;
  formattedDate: string;
  type: string;
};

/**
 * Represents a card displaying information about a portfolio project.
 *

 * @param {string} title - The title of the portfolio project.
 * @param {any} image - The image representing the portfolio project.
 * @param {string} link - The link or URL associated with the portfolio project.
 * @param {string} formattedDate - The formatted date when the project was made.
 * @param {string} type - The type of the portfolio project (e.g., "npm", "extension", "professional").
 * @returns {JSX.Element} A JSX element representing the PortfolioProjectCard component.
 *
 * @example
@component
 * // Example usage:
 * <PortfolioProjectCard
 *   title="Sample Project"
 *   image="/path/to/project-image.jpg"
 *   link="https://www.example.com/sample-project"
 *   formattedDate="May 2023"
 *   type="npm"
 * />
 */
export default function PortfolioProjectCard({
  title,
  image,
  link,
  formattedDate,
  type,
}: PortfolioProjectCardProps): JSX.Element {
  const typeToSentenceMap = new Map<string, string>(
    Object.entries({
      npm: "View the library",
      extension: "See the browser extension",
      professional: "View the website",
      personal: "View source code",
    })
  );

  const sentenceToViewProjectCode: string =
    typeToSentenceMap.get(type) || "View source code";

  return (
    <li className="portfolio-page__project-card card">
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
            <Icons.OpenLink width={18} height={18} fill={"currentColor"} />
          </span>
        </Link>
      </div>
    </li>
  );
}
