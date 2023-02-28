//React
import { time } from "console";
import React from "react";

export default function Timeline({
  arrayOfTimeLines,
}: {
  arrayOfTimeLines: any[];
}) {
  return (
    <div className="timeline__container">
      <section className="timeline">
        {arrayOfTimeLines.map((timeline: any, index: number) => {
          const { education, experience, establishment, yearSpan } = timeline;

          let title = !!education ? education : experience;

          let TITLE_EXCEEDS_FIVE_WORDS = title.split(" ").length > 5;

          let slicedTitle = "";
          if (TITLE_EXCEEDS_FIVE_WORDS) {
            slicedTitle = title.slice(0, 50) + "...";
          }

          return (
            <div className="timeline__dot" key={`${timeline}-${index}`}>
              <div className="timeline__card">
                <h4 className="timeline__card-title" title={title}>
                  {TITLE_EXCEEDS_FIVE_WORDS ? slicedTitle : title}
                </h4>
                <p className="timeline__card-establishment">{establishment}</p>
                <p className="timeline__card-year-span">{yearSpan}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
