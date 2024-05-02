//React
import React from "react";

import Image from "next/image";

type AboutCardProps = {
  svgIcon: any;
  title: string;
  description: string;
};

/**
 * Represents a card component used in the About section.
 *

 * @param {any} svgIcon - The SVG icon to display on the card.
 * @param {string} title - The title of the card.
 * @param {string} description - The description text to display on the card.
 * @returns {JSX.Element} A JSX element representing the AboutCard component.
 *
 * @example
@component
 * // Example usage:
 * const svgIcon = "/path/to/icon.svg";
 * const title = "Card Title";
 * const description = "This is the description of the card.";
 *
 * <AboutCard svgIcon={svgIcon} title={title} description={description} />
 */
export default function AboutCard({
  svgIcon,
  title,
  description,
}: AboutCardProps): JSX.Element {
  return (
    <div className="card">
      <h3 className="card__title">
        <Image src={svgIcon} alt={title} className="svg-icon" />
        {title}
      </h3>
      <p className="card__description">{description}</p>
    </div>
  );
}
