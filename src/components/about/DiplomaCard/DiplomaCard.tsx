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
          </a>
        </h3>
        <p className="diploma-card__paragraph">
          <span>Year:</span> {obtainedYearRangeDate}
        </p>
      </div>
    </div>
  );
}
