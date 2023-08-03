import Icons from "@components/shared/icons/Icons";
import React from "react";

/**
 * Diploma card
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
