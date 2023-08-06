import Icons from "@components/shared/icons/Icons";
import React from "react";

/**
 * Represents a diploma card component used in the About section.
 *

 * @param {string} diplomaTitle - The title of the diploma.
 * @param {string} obtainedYearRangeDate - The year range or date when the diploma was obtained.
 * @param {string} pdfLink - The link to the PDF file of the diploma.
 * @returns {JSX.Element} A JSX element representing the DiplomaCard component.
 *
 * @example
@component
 * // Example usage:
 * const diplomaTitle = "Bachelor of Science";
 * const obtainedYearRangeDate = "2015 - 2019";
 * const pdfLink = "/path/to/diploma.pdf";
 *
 * <DiplomaCard
 *   diplomaTitle={diplomaTitle}
 *   obtainedYearRangeDate={obtainedYearRangeDate}
 *   pdfLink={pdfLink}
 * />
 */
export default function DiplomaCard({
  diplomaTitle,
  obtainedYearRangeDate,
  pdfLink,
}: {
  diplomaTitle: string;
  obtainedYearRangeDate: string;
  pdfLink: string;
}): JSX.Element {
  return (
    <div className="about-page__diploma-card diploma-card">
      <div className="diploma-card__text">
        <h3 className="diploma-card__heading">
          <a className="diploma-card__link" href={pdfLink} target="_blank">
            {diplomaTitle}
            <Icons.OpenLink width={18} height={18} fill={"currentColor"} />
          </a>
        </h3>
        <p className="diploma-card__paragraph">
          <span>Year:</span> {obtainedYearRangeDate}
        </p>
      </div>
    </div>
  );
}
