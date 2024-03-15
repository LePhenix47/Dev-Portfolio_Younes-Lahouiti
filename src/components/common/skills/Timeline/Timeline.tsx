//React
import Icons from "@components/shared/icons/Icons";
import React from "react";

/**
 * Represents a timeline component displaying educational and work experiences.
 *
 * @param {Object[]} arrayOfTimeLines - An array of objects representing individual timelines.
 * @param {string} arrayOfTimeLines[].education - The educational background for the timeline.
 * @param {string} arrayOfTimeLines[].experience - The work experience for the timeline.
 * @param {string} arrayOfTimeLines[].establishment - The name of the educational institution or workplace.
 * @param {string} arrayOfTimeLines[].yearSpan - The year span or duration of the timeline.
 * @param {boolean} [reverse=false] - A boolean indicating whether to reverse the order of the timelines.
 * @returns {JSX.Element} A JSX element representing the Timeline component.
 *
 * @example
@component
 * // Example usage:
 * <Timeline
 *   arrayOfTimeLines={[
 *     {
 *       education: "Bachelor's Degree in Computer Science",
 *       establishment: "University of Example",
 *       yearSpan: "2015 - 2019",
 *     },
 *     {
 *       experience: "Front-end Developer",
 *       establishment: "Tech Company XYZ",
 *       yearSpan: "2020 - Present",
 *     },
 *   ]}
 *   reverse={true}
 * />
 */
export default function Timeline({
  arrayOfTimeLines,
  reverse = false,
}: {
  arrayOfTimeLines: any[];
  reverse?: boolean | undefined;
}): JSX.Element {
  return (
    <div className="timeline__container">
      <section className="timeline">
        {arrayOfTimeLines.map((timeline: any, index: number) => {
          const { education, experience, establishment, yearSpan } = timeline;

          const title = Boolean(education) ? education : experience;

          return (
            <div
              className={`timeline__dot ${
                !reverse ? "timeline__dot--reverse" : "timeline__dot--normal"
              }`}
              key={`${timeline}-${index}`}
            >
              <div className="timeline__card">
                <h4 className="timeline__card-title" title={title}>
                  {title}
                </h4>
                <p className="timeline__card-establishment">{establishment}</p>
                <p className="timeline__card-year-span">
                  <span>
                    <Icons.Calendar width={22} height={22} />
                  </span>
                  {yearSpan}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
