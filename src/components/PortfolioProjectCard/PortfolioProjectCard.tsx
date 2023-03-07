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
}: {
  title: string;
  image: any;
  link: string;
  formattedDate: string;
}) {
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
          View source code{" "}
          <span className="portfolio-page__project-card-link-arrow">→</span>
        </Link>
      </div>
    </div>
  );
}
